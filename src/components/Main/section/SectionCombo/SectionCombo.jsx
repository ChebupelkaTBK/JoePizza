import React from "react";
import Button from "../button/button.jsx";
import SalmonGame from "./sectionImages/Salmon game.webp";
import MuzKupil from "./sectionImages/muz kupil_jpg.webp";
import RolloniniLosasini from "./sectionImages/rollalini lososini_jpg.webp";
import ZumeriAndBumeri from "./sectionImages/zumeri i bumeri_jpg.webp";
const array = [
  {
    id: 1,
    image: SalmonGame,
    name: "Барбекю",
    mass: "730 г",
    cost: "От 287₽",
  },
  {
    id: 2,
    image: MuzKupil,
    name: "Сет Путь самурая",
    mass: "1190 г 56 шт",
    cost: "1 265₽",
  },
  {
    id: 3,
    image: RolloniniLosasini,
    name: "Много сыра",
    mass: "700 г",
    cost: "От 400₽",
  },
  {
    id: 4,
    image: ZumeriAndBumeri,
    name: "Вейдер-ролл",
    mass: "220 г",
    cost: "319₽",
  },
];
export default function SectionCombo() {
  return (
    <section className="section">
      {array.map((cart) => (
        <div key={cart.id} className="gridCart">
          <img src={cart.image} alt={cart.name} />
          <h2>{cart.name}</h2>
          <p>{cart.mass}</p>
          <p>{cart.cost}</p>
          <Button>В корзину</Button>
        </div>
      ))}
    </section>
  );
}
