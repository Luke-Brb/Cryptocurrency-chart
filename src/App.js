import React, { useState } from "react";
import CoinListButton from "./components/CoinListButton";
import Datepicker from "./components/Datepicker";
import Intervals from "./components/Intervals";
import Charts from "./components/Charts";
import MyChart from "./components/MyChart";
import ChartData from "./components/ChartData";
import Top from "./components/Top";

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [coinId, setCoinId] = useState("");

  const handleCoinSelect = (coinId) => {
    setSelectedCoin(coinId);
    console.log(" !!!Selected coin:", coinId);
  };

  const handleStartDate = (date) => {
    setStartDate(date);
  };

  const handleEndDate = (date) => {
    setEndDate(date);
  };

  console.log("APP selectedCoin:", selectedCoin);
  console.log("APP startDate:", startDate);
  console.log("APP endDate:", endDate);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">
          <h1 className="navbar-brand mb-2 fs-2">
            <strong>Cryptocurrency chart</strong>
          </h1>
        </div>
      </nav>
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="container rounded w-75 border border-3 border-dark bg-light mx-auto mt-5">
          <div className="d-flex justify-content-between mx-4 mt-3 mb-3">
            <CoinListButton onCoinSelect={handleCoinSelect} />
          </div>
          <div className="w-100 h-100 overflow-hidden">
            <Datepicker
              startDate={startDate}
              endDate={endDate}
              onChangeStartDate={handleStartDate}
              onChangeEndDate={handleEndDate}
            />
            {selectedCoin && startDate && endDate && (
              <>
                <MyChart
                  coinId={selectedCoin}
                  startDate={startDate}
                  endDate={endDate}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
