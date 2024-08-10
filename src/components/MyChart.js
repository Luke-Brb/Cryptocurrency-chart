import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import React, { useState, useEffect } from "react";
import { fetchData } from "..//utils/api";
import Top from "./Top";

function MyChart(props) {
  const [chartData, setChartData] = useState([]);
  console.log("MyChart - chartData 1:", chartData);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const apiResponse = await fetchData(
          props.coinId,
          props.startDate,
          props.endDate
        );
        console.log("MyChart - apiResponse.data:", apiResponse.data);

        const chartData = apiResponse.data.prices.map((price) => ({
          date: new Date(price[0]),
          value: price[1],
        }));
        setChartData(chartData);

        console.log("MyChart - coinId:", props.coinId);
        console.log("MyChart - startDate:", props.startDate);
        console.log("MyChart - endDate:", props.endDate);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDataAsync();
  }, [props.coinId, props.startDate, props.endDate]);

  return (
    <>
      <LineChart
        width={1000}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          name={props.coinId}
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
      </LineChart>
      <Top chartData={chartData} coinId={props.coinId} />
    </>
  );
}

export default MyChart;
