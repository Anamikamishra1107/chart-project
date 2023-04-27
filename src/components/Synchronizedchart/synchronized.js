import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const audaciousData = [
  {
    name: "Gunjalui vakte",
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

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/synchronized-area-chart-kpg1s";

  render() {
    return (
      <div style={{ width: "800px" }}>
        <h4 style={{ color: "", textAlign: "center", margin: "5px" }}>
          A demo of salary synchronized AreaCharts
        </h4>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={audaciousData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="designation"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={audaciousData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="salary"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
