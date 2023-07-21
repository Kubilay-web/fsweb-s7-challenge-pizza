import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import Icon1 from "../images/icons/1.svg";
import Icon2 from "../images/icons/2.svg";
import Icon3 from "../images/icons/3.svg";
import Icon4 from "../images/icons/4.svg";
import Icon5 from "../images/icons/5.svg";
import Icon6 from "../images/icons/6.svg";
import icon1 from "../images/adv-aseets/icons/icon-1.png";
import icon2 from "../images/adv-aseets/icons/icon-2.png";
import icon3 from "../images/adv-aseets/icons/icon-3.png";
import Food2 from "../images/adv-aseets/food-2.png";
import li0 from "../images/adv-aseets/insta/li-0.png";
import li1 from "../images/adv-aseets/insta/li-1.png";
import li2 from "../images/adv-aseets/insta/li-2.png";
import li3 from "../images/adv-aseets/insta/li-3.png";
import li4 from "../images/adv-aseets/insta/li-4.png";
import li5 from "../images/adv-aseets/insta/li-5.png";
import twitter from "../images/twitter.png";
import "./Home.css";


function Home() {
    return (
        <div className="main-container">
            <header>
                <div className="home-container">
                    <div className="home-image">
                        <img src={logo} alt="logo" style={{ width: '300px' }} />
                    </div>
                    <div className="home-opportunity">
                        <p>fırsatı kaçırma</p>
                    </div>
                    <div className="pizza-code">
                        <p>Kod Acıktırır<br />Pızza,Doyurur</p>
                    </div>
                    <div className="button-container">
                        <Link to="/order"><button id="order-pizza">Acıktım</button></Link>
                    </div>
                </div>
            </header>
            <nav>
                <div className="section-choices">
                    <div className="choice">
                        <img src={Icon1} alt="Icon1" style={{ width: '40px' }} />
                        <p>YENİ! Kore</p>
                    </div>
                    <div className="choice">
                        <img src={Icon2} alt="Icon2" style={{ width: '40px' }} />
                        <p>Pizza</p>
                    </div>
                    <div className="choice">
                        <img src={Icon3} alt="Icon3" style={{ width: '40px' }} />
                        <p>Burger</p>
                    </div>
                    <div className="choice">
                        <img src={Icon4} alt="Icon4" style={{ width: '40px' }} />
                        <p>Kızartmalar</p>
                    </div>
                    <div className="choice">
                        <img src={Icon5} alt="Icon5" style={{ width: '40px' }} />
                        <p>Fast food</p>
                    </div>
                    <div className="choice">
                        <img src={Icon6} alt="Icon6" style={{ width: '40px' }} />
                        <p>Gazlı İçecek</p>
                    </div>
                </div>
            </nav>
            <section>
                <div className="cards">
                    <div className="position-absolute-card">
                        <h1>Özel<br />Lezzetus</h1>
                        <p>Position:Absolute Acı Burger</p>
                        <button className="order-button-home">SİPARİŞ VER</button>
                    </div>
                    <div className="two-column-cards">
                        <div className="hackathlon-card">
                            <h1>Hackathlon<br />Burger Menü</h1>
                            <button className="order-button-home">SİPARİŞ VER</button>
                        </div>
                        <div className="npm-burger">
                            <h1><span>Çoooook</span> hızlı<br />npm gibi kurye</h1>
                            <button className="order-button-home">Sipariş Ver</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="menus">
                    <p>en çok paketlenen menüler</p>
                    <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
                    <div className="section-menus">
                        <div className="flavor">
                            <img src={Icon1} alt="Icon1" style={{ width: '40px' }} />
                            <p>Ramen</p>
                        </div>
                        <div className="flavor">
                            <img src={Icon2} alt="Icon2" style={{ width: '40px' }} />
                            <p>Pizza</p>
                        </div>
                        <div className="flavor">
                            <img src={Icon3} alt="Icon3" style={{ width: '40px' }} />
                            <p>Burger</p>
                        </div>
                        <div className="flavor">
                            <img src={Icon4} alt="Icon4" style={{ width: '40px' }} />
                            <p>French fries</p>
                        </div>
                        <div className="flavor">
                            <img src={Icon5} alt="Icon5" style={{ width: '40px' }} />
                            <p>Fast food</p>
                        </div>
                        <div className="flavor">
                            <img src={Icon6} alt="Icon6" style={{ width: '40px' }} />
                            <p>Soft Drinks</p>
                        </div>
                    </div>
                    <div className="package-menus">
                        <div className="position-absolute-pizza">
                            <img src={Food2} alt="logo" style={{ width: '306px' }} />
                            <h1>Position Absolute Acı Pizza</h1>
                            <div className="ranks">
                                <div><p>4.9</p></div>
                                <div><p>(928)</p></div>
                                <div>85tl</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer-container">
                    <div className="footer-first">
                        <div className="contact-container">
                            <h1>Teknolojik<br />Yemekler</h1>
                            <div className="adress">
                                <img src={icon1} alt="Icon4" style={{ width: '28px' }} />
                                <p>341 Londonderry Road,<br />Istanbul Türkiye</p>
                            </div>
                            <div className="mail">
                                <img src={icon2} alt="Icon4" style={{ width: '28px' }} />
                                <p>aciktim@teknolojikyemekler.com</p>
                            </div>
                            <div className="phone">
                                <img src={icon3} alt="Icon4" style={{ width: '28px' }} />
                                <p>+90 216 123 45 67</p>
                            </div>
                        </div>
                        <div className="footer-second">
                            <h1>Sıccacık Menüler</h1>
                            <div className="list">
                                <ul>
                                    <li>Terminal Pizza</li>
                                    <li>5 Kişilik Hackathlon Pizza</li>
                                    <li>useEffect Tavuklu Pizza</li>
                                    <li>Beyaz Console Frosty</li>
                                    <li>Testler Geçti Mutlu Burger</li>
                                    <li>Position Absolute Acı Burger</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-third">
                        <h1>Instagram</h1>
                        <div className="footer-images">
                            <div><img src={li0} alt="li0" style={{ width: '95px' }} /></div>
                            <div><img src={li1} alt="li1" style={{ width: '95px' }} /></div>
                            <div><img src={li2} alt="li2" style={{ width: '95px' }} /></div>
                        </div>
                        <div className="footer-images">
                            <div><img src={li3} alt="li3" style={{ width: '95px' }} /></div>
                            <div><img src={li4} alt="li4" style={{ width: '95px' }} /></div>
                            <div><img src={li5} alt="li5" style={{ width: '95px' }} /></div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer>
                <div className="copyright">
                    <p>© 2023 Teknolojik Yemekler</p>
                    <img src={twitter} alt="twitter" style={{ width: '20px', height: "20px" }} />
                </div>
            </footer>
        </div>
    )
};

export default Home;