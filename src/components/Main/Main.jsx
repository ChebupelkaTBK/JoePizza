import React, { useState } from "react";
import "./Main.scss";
import SectionBestDeals from "./section/SectionBestDeals/SectionBestDeals.jsx";
import SectionCombo from "./section/SectionCombo/SectionCombo.jsx";

export default function Main() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);
  return (
    <main>
      <h1>Лучшие предложения!</h1>
      <SectionBestDeals />
      <h1>Комбо</h1>
      <SectionCombo />
      <span>{Date()}</span>
    </main>
  );
}
