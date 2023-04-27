import React from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
const Activities = [
  { name: "Sleep", value: 20 },
  { name: "Code", value: 60 },
  { name: "Temple", value: 5 },
  { name: "TV", value: 1 },
  { name: "Mobile", value: 10 },
  { name: "Music", value: 5 },
];

function Picharts() {
  return (
    <div>
      <h1 className="chart-headign">My Daily Work Graph</h1>
      <PieChart width={1000} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={Activities}
          cx={650}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Picharts;
