import React from "react";
import logo from "../images/logo.svg";
import "./Success.css";


function Success(props) {
  const { orderData } = props.location.state;


  return (
    <div className="success">
      <div className="success-logo">
        <img src={logo} alt="logo" style={{ width: '300px' }} />
      </div>
      <div className="order">
        <div className="delicious-road">
          <p>lezzetin yolda</p>
        </div>
        <div className="order-get">
          <p>SİPARİŞ ALINDI</p>
        </div>
      </div>
      <div className="datas">
        <h2>Position Absolute Acı Pizza</h2>
        <div className="orderdata">
          <h3>Name:<b>{orderData.name}</b></h3>
          <h3>Boyut:<b>{orderData.Boyut}</b></h3>
          <h3>Hamur:<b>{orderData.Hamur}</b></h3>
          <h3>Ek Malzemeler:<b>{orderData.EkMalzemeler.join(', ')}</b></h3>
        </div>
      </div>
      <div className="sum-container">
        <h3>Sipariş Toplamı</h3>
        <h4>Seçimler:{orderData.choices}</h4>
        <h4>Toplam:{orderData.sum}₺</h4>
      </div>
    </div>
  );
}

export default Success;
