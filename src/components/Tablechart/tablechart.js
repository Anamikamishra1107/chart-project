import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import tablestyle from "./table.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RadialBar, RadialBarChart, PolarAngleAxis, LabelList } from "recharts";
// import { PieChart, Pie, Cell } from "recharts";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const Tablecharts = () => {
  const [modal, setModal] = useState(false);
  const [total, setTotal] = useState(false);
  const [details, setDetails] = useState(false);
  const toggle = (index, objvalue) => {
    setModal(!modal);
    if (index >= 0) {
      setDataValue(objvalue.activitypercent);
      setPercentage(objvalue.activitypercentvalue);
    }
  };
  const totalTimeModal = (index, objvalue) => {
    setTotal(!total);
    if (index >= 0) {
      setDataValue([objvalue]);
      setPercentage(objvalue.totaltime);
      // objvalue.totaltime = activitypercentvalue + activitypercent;
    }
  };
  const empdetailsModal = (index, objvalue) => {
    setDetails(!details);
    if (index >= 0) {
      setDataValue([objvalue]);
    }
  };

  const [employee, setEmployees] = useState([]);
  const [datavalue, setDataValue] = useState([]);
  const [percentage, setPercentage] = useState("");
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  async function getAllEmployess() {
    try {
      const employees = await axios.get("http://localhost:3005/employee");
      employees.data.map((value, index) => {
        let activitypercentvalue = value.activitypercentvalue;
        let idlepercentvalueone = value.idlepercentvalueone;
        const fixedHours = 9;
        const activityInitialValue =
          (parseInt(activitypercentvalue) * fixedHours) / 100;
        const idleInitialValue =
          (parseInt(idlepercentvalueone) * fixedHours) / 100;
        value.activetime = activityInitialValue;
        value.idletime = idleInitialValue;
        value.totaltime = activityInitialValue + idleInitialValue;
        value.remainingtime = (value.totaltime - fixedHours).toFixed(2);
      });
      setEmployees(employees.data);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  useEffect(() => {
    getAllEmployess();
  });

  return (
    <>
      <Table className={tablestyle.table}>
        <thead className={tablestyle.headtable}>
          <tr className={tablestyle.tablemenu}>
            <th>#</th>
            <th>Employee Name</th>
            <th>Activity Duration</th>
            <th>Activity Percent</th>
            <th>Idle Percent</th>
            <th>Active Time</th>
            <th>Idle Time</th>
            <th>Total Time</th>
            <th>Stop Time</th>
            <th>Remaning Time</th>
            <th>Present Day</th>
            <th>On Leave</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((v, i) => {
            return (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td onClick={() => empdetailsModal(i, v)}>{v.employeename}</td>
                <td>{v.activityduration}</td>
                {/* <td>{v.activitypercent}</td> */}
                <td onClick={() => toggle(i, v)}>
                  <RadialBarChart
                    width={100}
                    height={100}
                    cx={100 / 2}
                    cy={100 / 2}
                    innerRadius={30}
                    outerRadius={30}
                    barSize={10}
                    data={v.activitypercent}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      angleAxisId={0}
                      tick={false}
                    />
                    <RadialBar
                      background
                      clockWise
                      dataKey="value"
                      cornerRadius={100 / 2}
                      fill="rgb(240, 104, 30)"
                    />
                    <text
                      x={100 / 2}
                      y={100 / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="progress-label"
                    >
                      {v.activitypercentvalue}
                    </text>
                  </RadialBarChart>
                </td>
                {/* <td>{v.idlepercent}</td> */}
                <td>
                  <RadialBarChart
                    width={100}
                    height={100}
                    cx={100 / 2}
                    cy={100 / 2}
                    innerRadius={30}
                    outerRadius={30}
                    barSize={10}
                    data={v.idlepercent}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      angleAxisId={0}
                      tick={false}
                    />
                    <RadialBar
                      background
                      clockWise
                      dataKey="value"
                      cornerRadius={100 / 2}
                      fill="#33FF57"
                    />
                    <text
                      x={100 / 2}
                      y={100 / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="progress-label"
                    >
                      {v.idlepercentvalueone}
                    </text>
                  </RadialBarChart>
                </td>
                <td className={tablestyle.activecolor}>{v.activetime}</td>
                <td
                  style={{ color: "#33FF57" }}
                  className={tablestyle.idlecolor}
                >
                  {v.idletime}
                </td>
                <td
                  onClick={() => totalTimeModal(i, v)}
                  style={{ color: "rgb(19, 163, 246)" }}
                  className={tablestyle.totalcolor}
                >
                  {v.totaltime}
                </td>
                <td className={tablestyle.stopcolor}>{v.stoptime}</td>
                <td className={tablestyle.remainingcolor}>{v.remainingtime}</td>
                <td className={tablestyle.present}>{v.presnt}</td>
                <td className={tablestyle.leave}>{v.leave}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Activity Percentage Timeline</ModalHeader>
        <ModalBody>
          <RadialBarChart
            width={400}
            height={400}
            cx={400 / 2}
            cy={400 / 2}
            innerRadius={190}
            outerRadius={190}
            barSize={8}
            data={datavalue}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              clockWise
              dataKey="value"
              cornerRadius={400 / 2}
              fill="#33FF57"
            />
            <LabelList dataKey="employeename" position="top" />
            <text
              x={400 / 2}
              y={400 / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              className="progress-label"
            >
              {percentage}
            </text>
          </RadialBarChart>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={total} totalTimeModal={totalTimeModal}>
        <ModalHeader>Total Time Timeline</ModalHeader>
        <ModalBody>
          <h1 style={{ color: "rgb(19, 163, 246)", textAlign: "center" }}>
            Total Hours {percentage}
          </h1>
          <BarChart
            borderWidth={2}
            width={400}
            height={400}
            data={datavalue}
            margin={{
              top: 30,
              right: 30,
              left: 25,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="employeename" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="activitypercentvalue"
              stackId="a"
              fill="#33FF57"
              layout="vertical"
            />
            <Bar
              dataKey="idlepercentvalueone"
              stackId="b"
              fill="rgb(240, 104, 30)"
              layout="vertical"
            />
          </BarChart>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={totalTimeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={details} empdetailsModal={empdetailsModal}>
        <ModalHeader>Employe Details</ModalHeader>
        <ModalBody>
          <BarChart
            width={500}
            height={400}
            data={datavalue}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="employeename" fill="#82ca9a" position="insideRight" />
            <Bar dataKey="salary" fill="#82ca9d" />
            <Bar dataKey="designation" fill="#82ca9c" />
            <Bar dataKey="email" fill="#8884d8" />
          </BarChart>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={empdetailsModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Tablecharts;
