import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const audaciousData = [
  {
    name: "Gunjali vakte",
    salary: 50000,
    designation: "developer",
  },
  {
    name: "Nitish Mishra",
    salary: 120000,
    designation: "AEM Developer",
  },
  {
    name: "Abhishek  Mishra",
    salary: 95000,
    designation: "Data Scientist",
  },
  {
    name: "Deepak Mishra",
    salary: 98000,
    designation: "marketing",
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

const gradientOffset = () => {
  const dataMax = Math.max(...audaciousData.map((i) => i.salary));
  const dataMin = Math.min(...audaciousData.map((i) => i.designation));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const Employedetails = () => {
  return (
    <AreaChart
      width={900}
      height={700}
      data={audaciousData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="6 8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <defs>
        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset={off} stopColor="green" stopOpacity={3} />
          <stop offset={off} stopColor="red" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="salary"
        stroke="#33FF57"
        fill="url(#splitColor)"
        activeDot={{ r: 10 }}
      />
      <Area
        type="monotone"
        dataKey="designation"
        stroke="#33FF57"
        fill="url(#splitColor)"
        activeDot={{ r: 10 }}
      />
    </AreaChart>
  );
};

export default Employedetails;
