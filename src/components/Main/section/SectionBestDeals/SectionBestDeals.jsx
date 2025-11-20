import React from "react";
import barbequ from "./sectionImages/pizza-barbeku_jpg.png";
import setPutSamuraya from "./sectionImages/set-put samuraya_jpg.png";
import pizzaMnogoSira from "./sectionImages/pizza-mnogo sira_jpg.png";
import veiderRoll from "./sectionImages/veider-roll_jpg.png";
const array = [
  {
    id: 1,
    image: barbequ,
    name: "Барбекю",
    mass: "730 г",
    cost: "От 287₽",
  },
  {
    id: 2,
    image: setPutSamuraya,
    name: "Сет Путь самурая",
    mass: "1190 г 56 шт",
    cost: "1 265₽",
  },
  {
    id: 3,
    image: pizzaMnogoSira,
    name: "Много сыра",
    mass: "700 г",
    cost: "От 400₽",
  },
  {
    id: 4,
    image: veiderRoll,
    name: "Вейдер-ролл",
    mass: "220 г",
    cost: "319₽",
  },
];
export default function SectionBestDeals() {
  return (
    <section className="section">
      {array.map((cart) => (
        <div key={cart.id} className="gridCart">
          <img src={cart.image} alt={cart.name} />
          <h2>{cart.name}</h2>
          <p>{cart.mass}</p>
          <p>{cart.cost}</p>
          <button>В корзину</button>
        </div>
      ))}
    </section>
  );
}
