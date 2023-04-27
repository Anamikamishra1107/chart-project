import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
const audaciousData = [
  {
    name: "Gunjali vakte",
    salary: 50000,
    designation: "developer",
  },
  {
    name: "Amit Palaiya",
    salary: 45000,
    designation: "Project manager",
  },
  {
    name: "Sunil Yadav",
    salary: 85000,
    designation: "Ceo",
  },
  {
    name: "Hariom Sharma",
    salary: 30000,
    designation: "Frontend developer",
  },
  {
    name: "Sonu Bamniya",
    salary: 60000,
    designation: "owner",
  },
  {
    name: "Aarti Yadav",
    salary: 35000,
    designation: "Frontent developer",
  },
  {
    name: "Anamika mishra",
    salary: 30000,
    designation: "Frontend developer",
  },
  {
    name: "Astha panwar",
    salary: 15000,
    designation: "Backend developer",
  },
  {
    name: "Prachi patel",
    salary: 30000,
    designation: "developer",
  },
];
const Linechart = () => {
  return (
    <div>
      <h1
        style={{ color: "", textAlign: "center", margin: "5px" }}
        className="chart-headign"
      >
        Audacious-Technologies Salary chart
      </h1>
      <LineChart
        width={900}
        height={700}
        data={audaciousData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis domain={[15000, "dataMax + 5000"]} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="6 8" />
        <Line
          dataKey="salary"
          type="monotone"
          stroke="#82ca9d"
          activeDot={{ r: 100 }}
        />
        <Line
          dataKey="designation"
          type="monotone"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Linechart;
