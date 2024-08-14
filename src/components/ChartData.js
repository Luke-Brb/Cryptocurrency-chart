import React from "react";
import MyChart from "./MyChart";

const ChartData = ({ selectedCoin, startDate, endDate }) => {
  
  return (
    <MyChart coinID={selectedCoin} startDate={startDate} endDate={endDate} />
  );
};

export default ChartData;
