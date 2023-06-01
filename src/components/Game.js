import React, { useEffect } from "react";
import { useState } from "react";

const Game = () => {
  // const [currPerSec, setcurrPerSec] = useState(1);
  // const [buidlingPriceForSec, setBuildingPriceForSec] = useState(20);
  // const [buidlingPriceForClick, setBuildingPriceForClick] = useState(20);
  // const [score, setScore] = useState(0);
  // const [currency, setCurrency] = useState(0);
  // const [buildings, setBuildings] = useState(0);
  // const [clickScore, setClickScore] = useState(1);
  // const [intervil, setIntervil] = useState(0);

  const [currentValue, setCurrentValue] = useState({
    currPerSec: 1,
    buidlingPriceForSec: 20,
    buidlingPriceForClick: 20,
    score: 0,
    currency: 0,
    buildings: 0,
    clickScore: 1,
    intervil: 0,
  });

  function add() {
    setCurrentValue((prev) => ({
      ...prev,
      score: prev.score + prev.clickScore,
      currency: prev.currency + prev.clickScore,
    }));
    // setScore(score + clickScore);
    // setCurrency(currency + clickScore);
  }

  function getBuildingForSec() {
    setCurrentValue(
      (prev) => {
        clearInterval(prev.intervil);
        return {
          ...prev,
          currency: prev.currency - prev.buidlingPriceForSec,
          buildings: prev.buildings + 1,
          buidlingPriceForSec: prev.buidlingPriceForSec * 2,
          intervil: clickPerSec(),
          currPerSec: prev.currPerSec * 2,
        };
      }
      // setCurrency(currency - buidlingPriceForSec);
      // setBuildings(buildings + 1);
      // setBuildingPriceForSec(buidlingPriceForSec * 2);
      // setIntervil(clickPerSec(intervil != 0 ? intervil : ""));
    );
  }

  function getBuildingForClick() {
    setCurrentValue(
      (prev) => ({
        ...prev,
        clickScore: prev.clickScore * 2,
        currency: prev.currency - prev.buidlingPriceForClick,
        buildings: prev.buildings + 1,
        buidlingPriceForClick: prev.buidlingPriceForClick * 2,
      })
      // setClickScore(clickScore * 2);
      // setCurrency(currency - buidlingPriceForClick);
      // setBuildings(buildings + 1);
      // setBuildingPriceForClick(buidlingPriceForClick * 2);
    );
  }
  function clickPerSec() {
    const intervil_ = setInterval(() => {
      setCurrentValue((prev) => {
        let amount = prev.currPerSec / 2;
        console.log(amount);
        clearInterval(prev.intervil);
        return {
          ...prev,
          currency: prev.currency + amount,
          score: prev.score + amount,
        };
      });
    }, 1000);

    // setCurrentValue((prev) => ({ ...prev, currPerSec: prev.currPerSec * 2 }));

    return intervil_;
  }
  // let clickPerSec = () => {};

  // Before ALI UPDATE
  // useEffect(() => {
  //   let id = 0;
  //   if (currPerSec != 0) {
  //     id = setInterval(() => {
  //       setCurrency((currency) => currency + currPerSec);
  //       setScore((score) => score + currPerSec);
  //       console.log(`adding ${currPerSec}`);
  //     }, 1000);
  //   }

  //   console.log("Added another one");
  //   return () => clearInterval(id);
  //   // return () =>
  // }, [buildings]);

  // END
  //   useEffect(() => {
  //     clickPerSec();
  //     console.log("test");
  //   }, []);

  return (
    <div className="card">
      <h3>{`Buildings: ${currentValue.buildings}`}</h3>
      <h4>{`${currentValue.currency} KD`}</h4>
      <h1>{currentValue.score}</h1>
      <p>{`Score per click: ${currentValue.clickScore}`}</p>
      <p>{`Currency per second: ${currentValue.currPerSec}`}</p>
      <button onClick={add}>CLick Me!</button>
      {currentValue.currency >= currentValue.buidlingPriceForSec ? (
        <button
          className="btn-2"
          onClick={getBuildingForSec}
        >{`Buy a building +click per second for ${currentValue.buidlingPriceForSec}`}</button>
      ) : (
        ""
      )}
      {currentValue.currency >= currentValue.buidlingPriceForClick ? (
        <button
          className="btn-3"
          onClick={getBuildingForClick}
        >{`Buy a building +currency per click for ${currentValue.buidlingPriceForClick}`}</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Game;
