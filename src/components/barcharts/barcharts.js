import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const result = [
  {
    subject: "Physics",
    class11: 70,
    class12: 60,
  },
  {
    subject: "Chemistry",
    class11: 50,
    class12: 55,
  },
  {
    subject: "Math",
    class11: 66,
    class12: 57,
  },
  {
    subject: "Hindi",
    class11: 90,
    class12: 85,
  },
  {
    subject: "English",
    class11: 80,
    class12: 75,
  },
];
const Barcharts = () => {
  return (
    <div>
      <h1
        style={{
          color: "black",
          textAlign: "center",
          padding: "5px",
          margin: "25px",
        }}
        className="chart-headign"
      >
        My 11th and 12th Result
      </h1>
      <BarChart
        width={700}
        height={400}
        data={result}
        margin={{
          top: 5,
          left: 300,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="subject" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="class11" fill="#8884d8" />
        <Bar dataKey="class12" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
export default Barcharts;
