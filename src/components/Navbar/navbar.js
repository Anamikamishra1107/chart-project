import React from "react";
import navstyle from "./navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={navstyle.MenuStyle}>
      <ul>
        <li>
          <Link to="/linechart">Linecharts</Link>
        </li>
        <li>
          <Link to="/pichart">Pichart</Link>
        </li>
        <li>
          <Link to="/barcharts">Barchart</Link>
        </li>
        <li>
          <Link to="/bubblechart">Bubble</Link>
        </li>
        <li>
          <Link to="/areachart">Area-chart</Link>
        </li>
        <li>
          <Link to="/synchronized">Synchronized-chartsS</Link>
        </li>
        <li>
          <Link to="/treemapcharts"> Treemap-charts</Link>
        </li>
        <li>
          <Link to="/tablechart"> Table-chart</Link>
        </li>
        <li>
          <Link to="/"> Employees Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
