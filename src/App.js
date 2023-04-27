import Navbar from "./components/Navbar/navbar";
import Picharts from "./components/Picharts/pichart";
import Linechart from "./components/Linechart/linechart";
import Barcharts from "./components/barcharts/barcharts";
import { Route, Routes } from "react-router-dom";
import Bubble from "./components/Bubble Chart/bubble";
import Synchronizedcharts from "./components/Synchronizedchart/synchronized";
import Areacharts from "./components/Area-chart/area";
import Treemapcharts from "./components/Treemap/treemap";
import Tablecharts from "./components/Tablechart/tablechart";
import Employedetails from "./pages/employedetails";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/tablechart" element={<Tablecharts />} />
          <Route path="/pichart" element={<Picharts />} />
          <Route path="/barcharts" element={<Barcharts />} />
          <Route path="/" element={<Employedetails />}></Route>
          <Route path="/bubblechart" element={<Bubble />} />
          <Route path="/areachart" element={<Areacharts />} />
          <Route path="/synchronized" element={<Synchronizedcharts />} />
          <Route path="/treemapcharts" element={<Treemapcharts />} />
          <Route path="/linechart" element={<Linechart />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
