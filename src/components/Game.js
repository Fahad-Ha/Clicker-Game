import React, { useEffect } from "react";
import { useState } from "react";

const Game = () => {
  const [currPerSec, setcurrPerSec] = useState(0);
  const [buidlingPrice, setBuildingPrice] = useState(20);
  const [score, setScore] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [buildings, setBuildings] = useState(0);
  const [clickScore, setClickScore] = useState(1);
  function add() {
    setScore(score + clickScore);
    setCurrency(currency + clickScore);
  }
  function getBuildingForSec() {
    setCurrency(currency - buidlingPrice);
    setBuildings(buildings + 1);
    setBuildingPrice(buidlingPrice * 2);
    setcurrPerSec(currPerSec + 1);
    clickPerSec();
  }

  function getBuildingForClick() {
    setClickScore(clickScore * 2);
    setCurrency(currency - buidlingPrice);
    setBuildings(buildings + 1);
    setBuildingPrice(buidlingPrice * 2);
  }

  function clickPerSec() {
    setInterval(() => {
      setCurrency((currency) => currency + 1);
      setScore((score) => score + 1);
    }, 1000);
  }
  //   useEffect(() => {
  //     clickPerSec();
  //     console.log("test");
  //   }, []);

  return (
    <div className="card">
      <h3>{`Buildings: ${buildings}`}</h3>
      <h4>{`${currency} KD`}</h4>
      <h1>{score}</h1>
      <p>{`Score per click: ${clickScore}`}</p>
      <p>{`Currency per second: ${currPerSec}`}</p>
      <button onClick={add}>CLick Me!</button>
      {currency >= buidlingPrice ? (
        <>
          <button
            className="btn-2"
            onClick={getBuildingForSec}
          >{`Buy a building +click per second `}</button>
          <button
            className="btn-3"
            onClick={getBuildingForClick}
          >{`Buy a building +currency per click `}</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
