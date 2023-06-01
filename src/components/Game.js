import React from "react";
import { useState } from "react";

const Game = () => {
  const [currPerSec, setcurrPerSec] = useState(1);
  const [buidlingPriceForSec, setBuildingPriceForSec] = useState(20);
  const [buidlingPriceForClick, setBuildingPriceForClick] = useState(20);
  const [score, setScore] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [buildings, setBuildings] = useState(0);
  const [clickScore, setClickScore] = useState(1);
  const [intervil, setIntervil] = useState(0);
  function add() {
    setScore(score + clickScore);
    setCurrency(currency + clickScore);
  }
  function getBuildingForSec() {
    setCurrency(currency - buidlingPriceForSec);
    setBuildings(buildings + 1);
    setBuildingPriceForSec(buidlingPriceForSec * 2);
    setIntervil(clickPerSec(intervil !== 0 ? intervil : ""));
  }

  function getBuildingForClick() {
    setClickScore(clickScore * 2);
    setCurrency(currency - buidlingPriceForClick);
    setBuildings(buildings + 1);
    setBuildingPriceForClick(buidlingPriceForClick * 2);
  }

  function clickPerSec(intervil) {
    clearInterval(intervil);
    setcurrPerSec(currPerSec * 2);

    const intervil_ = setInterval(() => {
      setCurrency((currency) => currency + currPerSec);
      setScore((score) => score + currPerSec);
      console.log(currPerSec);
    }, 1000);
    return intervil_;
  }
  //   useEffect(() => {
  //     clickPerSec();
  //     console.log("test");
  //   }, []);
  // Why here it will be step ahead ? instead of inside of setInterval function ?
  console.log(currPerSec);
  return (
    <div className="card">
      <h3>{`Buildings: ${buildings}`}</h3>
      <h4>{`${currency} KD`}</h4>
      <h1>{score}</h1>
      <p>{`Score per click: ${clickScore}`}</p>
      <p>{`Currency per second: ${currPerSec === 1 ? "0" : currPerSec / 2}`}</p>
      <button onClick={add}>CLick Me!</button>
      {currency >= buidlingPriceForSec ? (
        <button
          className="btn-2"
          onClick={getBuildingForSec}
        >{`Buy a building +click per second for ${buidlingPriceForSec}`}</button>
      ) : (
        ""
      )}
      {currency >= buidlingPriceForClick ? (
        <button
          className="btn-3"
          onClick={getBuildingForClick}
        >{`Buy a building +currency per click for ${buidlingPriceForClick}`}</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
