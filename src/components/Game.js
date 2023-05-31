import React from "react";
import { useState } from "react";

const Game = () => {
  let buidlingPrice = 20;
  const [score, setScore] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [buildings, setBuildings] = useState(0);
  const [clickScore, setClickScore] = useState(1);
  function add() {
    setScore(score + 1);
    setCurrency(currency + 1);
  }
  function getBuilding() {
    setCurrency(currency - buidlingPrice);
    setBuildings(buildings + 1);
  }

  return (
    <div>
      <h3>{`Buildings: ${buildings}`}</h3>
      <h4>{currency}</h4>
      <h1>{`${score} KD`}</h1>
      <p>{`score per click: ${clickScore}`}</p>
      <button onClick={add}>CLick Me!</button>
      {currency >= 20 ? (
        <button
          onClick={getBuilding}
        >{`Buy a building upgrade for ${buidlingPrice}!`}</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
