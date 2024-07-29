import React, { useState } from "react";
import Cryptocurrency from "./components/Cryptocurrency";
import Datepicker from "./components/Datepicker";
import Intervals from "./components/Intervals";
import Charts from "./components/Charts";
import MyChart from "./components/MyChart";

export default function App() {
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
            <Cryptocurrency />
            <Datepicker />
            <Intervals />
          </div>
          <div>
            <Charts />
            <MyChart />
          </div>
        </div>
      </div>
    </>
  );
}
