import React, { useState, useEffect } from "react";

const Top = ({ chartData, coinId }) => {
  const [largestIncrease, setLargestIncrease] = useState(0);
  const [largestDecrease, setLargestDecrease] = useState(0);
  const [topCoins, setTopCoins] = useState([]);
  const [topCoinsAscending, setTopCoinsAscending] = useState([]);
  const [topCoinsDescending, setTopCoinsDescending] = useState([]);
  const sign = String.fromCodePoint("0x1f603");

  useEffect(() => {
    calculateTop(chartData);
  }, [chartData]);

  const calculateTop = (chartData) => {
    let largestIncrease = 0;
    let largestDecrease = 0;
    console.log("Top.js - CHART LENGTH: ", chartData.length);
    for (let i = 1; i < chartData.length; ++i) {
      const currentValue = chartData[i].value;
      const previousValue = chartData[i - 1].value;
      // console.log("Top.js: AFISARE DATE ");
      // console.log("currentValue:", currentValue);
      // console.log("prevValue:", previousValue);
      const percentageChange =
        ((currentValue - previousValue) / previousValue) * 100;

      if (percentageChange > largestIncrease) {
        largestIncrease = percentageChange;
      }

      if (percentageChange < largestDecrease) {
        largestDecrease = percentageChange;
      }

      setLargestIncrease(largestIncrease);
      setLargestDecrease(largestDecrease);
    }
    if ((coinId, largestIncrease, largestDecrease)) {
      const topCoin = { coinId, largestIncrease, largestDecrease };
      setTopCoins((listedTopCoins) => [...listedTopCoins, topCoin]);
    }
  };

  const compare = () => {
    const sortAscending = [...topCoins].sort(
      (a, b) => b.largestIncrease - a.largestIncrease
    );
    setTopCoinsAscending(sortAscending);
    const sortDescending = [...topCoins].sort(
      (a, b) => a.largestDecrease - b.largestDecrease
    );
    setTopCoinsDescending(sortDescending);
  };

  useEffect(() => {
    compare();
  }, [topCoins]);

  return (
    <div>
      <div class="col-xs-6 mt-3">
        Largest Increase for {coinId}: {largestIncrease} %
      </div>
      <div class="col-xs-6">
        Largest Decrease for {coinId}: {largestDecrease} %
      </div>
      <div class="container text-center mt-3">
        <div class="row align-items-start">
          <div class="col">
            <div class="bg-success text-white">TOP Increase :</div>
            {topCoinsAscending.map((topCoin, index) => (
              <div key={index} class="text-success">
                {topCoin.coinId}: {topCoin.largestIncrease} %
              </div>
            ))}
          </div>
          <div class="col">
            <div class="col bg-danger text-white">TOP Decrease :</div>
            {topCoinsDescending.map((topCoin, index) => (
              <div key={index} class="text-danger">
                {topCoin.coinId}: {topCoin.largestDecrease} %
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
