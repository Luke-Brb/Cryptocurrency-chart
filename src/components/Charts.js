import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "BTC", uv: 400, pv: 2400, amt: 2400 },
  { name: "ETH", uv: 300, pv: 1398, amt: 2210 },
  { name: "DOGE", uv: 200, pv: 9800, amt: 2290 },
  { name: "AMZN", uv: 300, pv: 1398, amt: 2210 },
  { name: "AAPL", uv: 200, pv: 9800, amt: 2290 },
  { name: "XXXX", uv: 1000, pv: 1000, amt: 200 },
];

function Charts() {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

export default Charts;
