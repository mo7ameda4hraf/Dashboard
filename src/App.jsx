import React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
//Static Part:
import Navbar from "./bar/Navbar";
import Sidbar from "./bar/Sidebar";
//Pages:
import PageMangeTeam from "./pages/MangeTeam";
import PageDashbord from "./pages/Home/Dashbord";
import PageBalance from "./pages/Balances";
import PageBarChart from "./pages/par chart/BarChartPage";
import PageCalender from "./pages/Calendar";
import PageFaq from "./pages/Faq";
import PageInformation from "./pages/Information";
import PageLineChart from "./pages/line chart/LineChart";
import PagePieChart from "./pages/pie chart/PieChart";
import PageProfile from "./pages/Profile";
import Geagraphy from "./pages/geagraphy/Geagraphy";

function App() {
  const theme = useTheme();
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <Sidbar show={showSidebar} setShow={setShowSidebar} />
      <div
        style={{
          marginLeft: showSidebar ? "218px" : "70px",
          width: "100%",
        }}
      >
        <Navbar />
        <div
          style={{
            padding: "19px 7px",
            marginTop: "55px",
            width: "-webkit-fill-available",
            background: theme.palette.mode === "dark" ? "#000" : "#f1f1f1ff",
            height: "100%",
            borderLeft: "1px solid rgb(241 241 241 / 30%)",
          }}
        >
          {/* {ROUTES} */}
          <Routes>
            {/* <Route path="/home" element={<PageDashbord />} /> */}
            <Route path="/" element={<PageDashbord />} />
            <Route path="/manageteam" element={<PageMangeTeam />} />
            <Route path="/Information" element={<PageInformation />} />
            <Route path="/Balances" element={<PageBalance />} />
            <Route path="/Profile" element={<PageProfile />} />
            <Route path="/Calendar" element={<PageCalender />} />
            <Route path="/FAQ" element={<PageFaq />} />
            <Route path="/barChart" element={<PageBarChart />} />
            <Route path="/PieChart" element={<PagePieChart />} />
            <Route path="/lineChart" element={<PageLineChart />} />
            <Route path="/geagraphyChart" element={<Geagraphy />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
