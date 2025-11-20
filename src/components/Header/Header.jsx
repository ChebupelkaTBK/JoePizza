import React from "react";
import "./Header.scss";
import logo from "../../images/image.png";

export default function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="" />
      <h1>JoePizza</h1>
      <nav>
        <p>Комбо</p>
        <p>Пицца</p>
        <p>Роллы</p>
      </nav>
      <div className="grid">
        <p>Привезем заказ никогда!</p>
        <p>8-905-047-77-13</p>
        <p>Если не успеем претензии по номеру:</p>
        <p>7-920-499-10-95</p>
      </div>
    </header>
  );
}
