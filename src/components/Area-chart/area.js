import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const CoronaGraph = [
  {
    date: "1-Feb",
    cases: 161386,
  },
  {
    date: "2-Feb",
    cases: 172433,
  },
  {
    date: "3-Feb",
    cases: 149364,
  },
  {
    date: "4-Feb",
    cases: 127652,
  },
  {
    date: "5-Feb",
    cases: 107474,
  },
  {
    date: "6-Feb",
    cases: 83876,
  },
  {
    date: "7-Feb",
    cases: 138511,
  },
];
const Areacharts = () => {
  return (
    <div>
      <h1 className="chart-headign">Corona Graph</h1>
      <AreaChart
        width={1100}
        height={500}
        data={CoronaGraph}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="cases" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};
export default Areacharts;
