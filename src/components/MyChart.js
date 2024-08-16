import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Top from "./Top";

async function apiFetchData({ coinId, startDate, endDate }) {
  const dayStart = startDate.getTime() / 1000;
  const dayEnd = endDate.getTime() / 1000;

  if (Math.floor(dayStart) == Math.floor(dayEnd)) {
    startDate = endDate.getTime() - 300000;
  }

  try {
    const options = {
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart/range`,
      params: {
        vs_currency: "eur",
        from: Math.floor(new Date(startDate).getTime() / 1000),
        to: Math.floor(new Date(endDate).getTime() / 1000),
        precision: "2",
      },
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-WmMgwDjkmjDWLrKhCfSduwuc",
      },
    };
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
  }
}

function MyChart({ coinId, startDate, endDate }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const apiResponse = await apiFetchData({ coinId, startDate, endDate });
        const chartData = apiResponse.data.prices.map((price) => ({
          date: new Date(price[0]),
          value: price[1],
        }));
        setChartData(chartData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataAsync();
  }, [coinId, startDate, endDate]);

  return (
    <>
      <LineChart
        width={1000}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line name={coinId} type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
      </LineChart>
      <Top chartData={chartData} coinId={coinId} />
    </>
  );
}

export default MyChart;
