import React, { useState } from "react";
import "./Order.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";



const validationSchema = Yup.object({
    name: Yup.string()
        .required("İsim zorunludur")
        .min(3, "İsim en az 3 karakter olmalıdır"),
        Boyut: Yup.string().required("Boyut seçimi zorunludur"),
        Hamur: Yup.string().required("Hamur seçimi zorunludur"),

});


function Order() {


    const history = useHistory();
    const [choices, setChoices] = useState(0);
    const [sum, setSum] = useState(85.50);
    const [number, setNumber] = useState(1);
    const [errors, setErrors] = useState({});

    function increment(e) {
        e.preventDefault();
        setNumber((prevNumber) => prevNumber + 1);
        setSum((prevSum) => prevSum * 2);

        setFormValues((prevValues) => ({
            ...prevValues,
            sum: sum * 2,
        }));
    }

    const decrement = (e) => {
        e.preventDefault();
        if (number > 1) {
            setNumber(number - 1);
            setSum((prevSum) => prevSum / 2);
        }

        setFormValues((prevValues) => ({
            ...prevValues,
            sum: sum / 2,
        }));
    };

    const [formValues, setFormValues] = useState({
        name: "",
        Boyut: "",
        Hamur: "",
        EkMalzemeler: [],
        Note: "",
        sum: sum,
        choices: choices
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));

        validationSchema
            .validateAt(name, { [name]: value })
            .then(() => {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: null, }));
            })
            .catch((err) => {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
            });
    };


    const handleOptionChange = (e) => {
        setFormValues((prevFormData) => ({
            ...prevFormData,
            Boyut: e.target.value,
        }));
    };

    const handleValueChange = (e) => {
        setFormValues((prevFormData) => ({
            ...prevFormData,
            Hamur: e.target.value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            const selectedIngredients = formValues.EkMalzemeler;

            if (checked) {
                if (selectedIngredients.length < 10) {
                    setChoices(choices + 5);
                    setSum(sum + 5);
                    setFormValues((prevValues) => ({
                        ...prevValues,
                        EkMalzemeler: [...selectedIngredients, value],
                        sum: sum + 5,
                        choices: choices + 5
                    }));
                }
            } else {
                setChoices(choices - 5);
                setSum(sum - 5);
                setFormValues((prevValues) => ({
                    ...prevValues,
                    EkMalzemeler: selectedIngredients.filter(
                        (malzeme) => malzeme !== value
                    ),
                    sum: sum - 5,
                    choices: choices - 5
                }));
            }
        }
        else {
            setFormValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        }
    };

    const handleMessageChange = (e) => {
        setFormValues((prevFormData) => ({
            ...prevFormData,
            Note: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        validationSchema
            .validate(formValues, { abortEarly: false })
            .then(() => {
                console.log("Form verileri geçerli");
                axios
                    .post("https://reqres.in/api/users", formValues)
                    .then((response) => {
                        console.log("API yanıtı:", response.data);

                        history.push('/success', { orderData: response.data });
                    })
                    .catch((error) => {
                        console.error("API hatası:", error.message);
                    });
            })
    };

    const isDisabled = Object.keys(errors).some((key) => !!errors[key]);


    return (
        <div className="order">
            <div className="order-header">
                <h1>Teknolojik Yemekler</h1>
                <ul className="order-nav">
                    <Link to="/"><li>AnaSayfa</li></Link>
                    <li>{">"}</li>
                    <Link to="/order"><li><b>Sipariş Oluştur</b></li></Link>
                </ul>
            </div>
            <div className="order-info">
                <h1>Position Absolute Acı Pizza</h1>
                <div className="values">
                    <p><b>85.50₺</b></p>
                    <p>4.9</p>
                    <p>(200)</p>
                </div>
                <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana<br />
                    göre.Pizza,domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha<br />
                    sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,<br />
                    genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan<br />
                    kökenli lezzetli bir yemektir.Küçük bir pizzaya bazen pizzetta denir.
                </p>
                <div className="order-form">
                    <form onSubmit={handleSubmit} >
                        <label>
                            İsim-Soyisim<br />
                            <input
                                onChange={handleChange}
                                type="text"
                                name="name"
                                value={formValues.name}
                            />
                        </label>
                        {errors.name && <p>{errors.name}</p>}
                        <div className="form-two">

                            <div className="dimensions">
                                <h2>Boyut Seç *</h2>

                                <label>
                                    <input
                                        type="radio"
                                        name="Boyut"
                                        value="Küçük"
                                        checked={formValues.Boyut === 'Küçük'}
                                        onChange={handleOptionChange}
                                    />
                                    Küçük
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        name="Boyut"
                                        value="Orta"
                                        checked={formValues.Boyut === 'Orta'}
                                        onChange={handleOptionChange}
                                    />
                                    Orta
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        name="Boyut"
                                        value="Büyük"
                                        checked={formValues.Boyut === 'Büyük'}
                                        onChange={handleOptionChange}
                                    />
                                    Büyük
                                </label>
                                {errors.name && <p>{errors.name}</p>}
                            </div>
                            <div className="dropdown">
                                Hamur Seç *
                                <label>
                                    <select value={formValues.selectedOption} onChange={handleValueChange}>
                                        <option value="">Hamur Kalınlığı</option>
                                        <option value="İnce">İnce</option>
                                        <option value="Kalın">Kalın</option>
                                    </select>
                                </label>
                                {errors.Hamur && <p>{errors.Hamur}</p>}
                            </div>
                        </div>
                        <div>
                            <h2>Ek Malzemeler</h2>
                            <p>En Fazla 10 malzeme seçebilirsiniz.5₺</p>
                        </div>
                        <div className="form-three">
                            <div className="section-one">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="EkMalzemeler"
                                        value="Peperoni"
                                        checked={formValues.EkMalzemeler.includes("Peperoni")}
                                        onChange={handleCheckboxChange}
                                    />
                                    Peperoni
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="EkMalzemeler"
                                        value="Sosis"
                                        checked={formValues.EkMalzemeler.includes("Sosis")}
                                        onChange={handleCheckboxChange}
                                    />
                                    Sosis
                                </label>

                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Kanada Jambonu"
                                        checked={formValues.EkMalzemeler.includes("Kanada Jambonu")}
                                        onChange={handleCheckboxChange} />

                                    Kanada Jambonu
                                </label>

                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Tavuk Izgara"
                                        checked={formValues.EkMalzemeler.includes("Tavuk Izgara")}
                                        onChange={handleCheckboxChange} />
                                    Tavuk Izgara
                                </label>
                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Soğan"
                                        checked={formValues.EkMalzemeler.includes("Soğan")}
                                        onChange={handleCheckboxChange} />
                                    Soğan
                                </label>
                            </div>

                            <div className="section-two">
                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Domates"
                                        checked={formValues.EkMalzemeler.includes("Domates")}
                                        onChange={handleCheckboxChange} />
                                    Domates

                                </label>
                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Mısır"
                                        checked={formValues.EkMalzemeler.includes("Mısır")}
                                        onChange={handleCheckboxChange} />
                                    Mısır
                                </label>

                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Sucuk"
                                        checked={formValues.EkMalzemeler.includes("Sucuk")}
                                        onChange={handleCheckboxChange} />
                                    Sucuk
                                </label>

                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Jalepeno"
                                        checked={formValues.EkMalzemeler.includes("Jalepeno")}
                                        onChange={handleCheckboxChange} />
                                    Jalepeno
                                </label>
                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Sarımsak"
                                        checked={formValues.EkMalzemeler.includes("Sarımsak")}
                                        onChange={handleCheckboxChange} />
                                    Sarımsak
                                </label>
                            </div>

                            <div className="section-three">
                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Biber"
                                        checked={formValues.EkMalzemeler.includes("Biber")}
                                        onChange={handleCheckboxChange} />
                                    Biber
                                </label>

                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Ananas"
                                        checked={formValues.EkMalzemeler.includes("Ananas")}
                                        onChange={handleCheckboxChange} />
                                    Ananas
                                </label>

                                <label>
                                    <input type="checkbox"
                                        name="EkMalzemeler"
                                        value="Kabak"
                                        checked={formValues.EkMalzemeler.includes("Kabak")}
                                        onChange={handleCheckboxChange} />
                                    Kabak
                                </label>
                            </div>
                        </div>
                        <div className="notes">
                            Sipariş Notu
                            <textarea
                                id="note"
                                name="note"
                                value={formValues.Note}
                                onChange={handleMessageChange}
                                placeholder="Siparişine eklemek istediğin bir not var mı?"
                                rows={4}
                                cols={50}
                            />
                        </div>
                        <div className="section-cash">
                            <div className="sum-button">
                                <div className="decrement">
                                    <button onClick={decrement}>-</button>
                                </div>
                                <div className="sum-number">
                                    {number}
                                </div>
                                <div className="increment">
                                    <button name="increment" onClick={increment}>+</button>
                                </div>
                            </div>
                            <div className="total">
                                <h2>Sipariş Toplamı</h2>
                                <div className="choices">
                                    <div>
                                        Seçimler
                                    </div>
                                    <div>
                                        {choices}₺
                                    </div>
                                </div>
                                <div className="sum">
                                    <div>
                                        Toplam
                                    </div>
                                    <div>
                                        {sum}₺
                                    </div>
                                </div>
                                <div className="order-button">
                                    <button type="submit" disabled={isDisabled}>Sipariş Ver</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Order;
