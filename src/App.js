import React, { useState } from "react";
import CoinListButton from "./components/CoinListButton";
import Datepicker from "./components/Datepicker";
import MyChart from "./components/MyChart";

function App() {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handleCoinSelect(coinId) {
    setSelectedCoin(coinId);
  }

  function handleStartDate(date) {
    setStartDate(date);
  }

  function handleEndDate(date) {
    setEndDate(date);
  }

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
}

export default App;
