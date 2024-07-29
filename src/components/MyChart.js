import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import React, { useState, useEffect } from "react";
import { fetchData } from "..//utils/api";

const MyChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const apiResponse = await fetchData();
        const chartData = apiResponse.data.prices.map((price) => ({
          date: new Date(price[0]),
          value: price[1],
        }));
        setData(chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDataAsync();
  }, []);

  return (
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default MyChart;
