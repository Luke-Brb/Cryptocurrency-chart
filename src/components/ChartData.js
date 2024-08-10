import React from "react";
import MyChart from "./MyChart";

const ChartData = ({ selectedCoin, startDate, endDate }) => {
  console.log("ChartData - selectedCoin:", selectedCoin);
  console.log("ChartData - startDate:", startDate);
  console.log("ChartData - endDate:", endDate);
  return (
    <MyChart coinID={selectedCoin} startDate={startDate} endDate={endDate} />
  );
};

export default ChartData;
