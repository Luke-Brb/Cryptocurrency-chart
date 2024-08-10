import React, { useState, useEffect } from "react";

const Top = ({ chartData, coinId }) => {
  const [largestIncrease, setLargestIncrease] = useState(0);
  const [largestDecrease, setLargestDecrease] = useState(0);

  useEffect(() => {
    calculateTop(chartData);
  }, [chartData]);

  const calculateTop = (chartData) => {
    let largestIncrease = 0;
    let largestDecrease = 0;
    for (let i = 1; i < chartData.length; ++i) {
      console.log("Top.js: AFISARE DATE ");
      const currentValue = chartData[i].value;
      const previousValue = chartData[i - 1].value;
      console.log("currentValue:", currentValue);
      console.log("prevValue:", previousValue);
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
  };

  return (
    <div>
      <p>
        Largest Increase for {coinId}: {largestIncrease} %
      </p>
      <p>
        Largest Decrease for {coinId}: {largestDecrease} %
      </p>

      {chartData.map((historicalData, index) => (
        <div key={index}>
          {"coinId"}:{historicalData.value}
        </div>
      ))}
    </div>
  );
};

export default Top;
