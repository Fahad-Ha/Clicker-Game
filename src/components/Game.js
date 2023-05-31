import React, { useEffect } from "react";
import { useState } from "react";

const Game = () => {
  const [buidlingPrice, setBuildingPrice] = useState(20);
  const [score, setScore] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [buildings, setBuildings] = useState(0);
  const [clickScore, setClickScore] = useState(1);
  function add() {
    setScore(score + clickScore);
    setCurrency(currency + clickScore);
  }
  function getBuilding() {
    setClickScore(clickScore * 2);
    setCurrency(currency - buidlingPrice);
    setBuildings(buildings + 1);
    setBuildingPrice(buidlingPrice * 2);
    clickPerSec();
  }

  function clickPerSec() {
    setInterval(() => {
      setCurrency((currency) => currency + 1);
    }, 1000);
    console.log("rendered");
    // return clearInterval(id);
  }
  //   useEffect(() => {
  //     clickPerSec();
  //     console.log("test");
  //   }, []);

  return (
    <div className="card">
      <h3>{`Buildings: ${buildings}`}</h3>
      <h4>{currency}</h4>
      <h1>{`${score} KD`}</h1>
      <p>{`score per click: ${clickScore}`}</p>
      <button onClick={add}>CLick Me!</button>
      {currency >= buidlingPrice ? (
        <button
          className="btn-2"
          onClick={getBuilding}
        >{`Buy a building upgrade for ${buidlingPrice}!`}</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
