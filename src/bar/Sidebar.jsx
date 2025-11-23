import React, { useMemo } from "react";
import { useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import myImage from "../Photo/img.png";
export default function Sidebar({ show, setShow }) {
  const theme = useTheme();
  //Handle Functions
  function handleClickMenu() {
    if (show === false) {
      setShow(true);
    }
  }

  const iconColor = useMemo(() => {
    return theme.palette.mode === "dark" ? "#fff" : "#000";
  }, [theme.palette.mode]);

  //Arrays
  const menuItems1 = [
    {
      path: "/",
      label: "Dashboard",
      icon: <HomeOutlinedIcon style={{ color: iconColor }} />,
    },
    {
      path: "/manageteam",
      label: "Manage Team",
      icon: <PeopleAltOutlinedIcon style={{ color: iconColor }} />,
    },
    {
      path: "/information",
      label: "Contacts Information",
      icon: <ContactsOutlinedIcon style={{ color: iconColor }} />,
    },
    {
      path: "/balances",
      label: "Invoices Balances",
      icon: <ReceiptOutlinedIcon style={{ color: iconColor }} />,
    },
  ];
  const menuItems2 = [
    {
      path: "/Profile",
      label: "Profile Form",
      icon: <PermIdentityOutlinedIcon style={{ color: iconColor }} />,
    },
    {
      path: "/Calendar",
      label: "Calendar",
      icon: <CalendarTodayOutlinedIcon style={{ color: iconColor }} />,
    },
    {
      path: "/FAQ",
      label: "FAQ Page",
      icon: <LiveHelpOutlinedIcon style={{ color: iconColor }} />,
    },
  ];
  const menuItems3 = [
    {
      path: "/barChart",
      label: "Bar Chart",
      icon: <BarChartOutlinedIcon style={{ color: iconColor }} />,
    },
    {
      path: "/PieChart",
      label: "Pie Chart",
      icon: <PieChartOutlinedIcon style={{ color: iconColor }} />,
    },
    {
      path: "/lineChart",
      label: "Line Chart",
      icon: <TimelineOutlinedIcon style={{ color: iconColor }} />,
    },
    {
      path: "/geagraphyChart",
      label: "Geagraphy Chart",
      icon: <MapOutlinedIcon style={{ color: iconColor }} />,
    },
  ];

  return (
    <div
      style={{
        background: theme.palette.mode === "dark" ? "#000" : "",
        height: "100%",
      }}
      className={show ? "sidbar" : "sidbar-close"}
    >
      <div
        className="main"
        style={{
          background:
            theme.palette.mode === "dark"
              ? "#252525ff"
              : theme.palette.primary.dark,
        }}
      >
        <MenuIcon onClick={handleClickMenu} className="menu-icon" />
        <CloseOutlinedIcon
          className="close"
          onClick={() => {
            setShow(false);
          }}
        />
      </div>

      <ul
        className="head"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px 0",
          gap: "5px",
        }}
      >
        <img
          alt=""
          src={myImage}
          style={{ width: "70px", borderRadius: "50%" }}
        />

        <p
          className="text name"
          style={{ fontSize: "18px", fontWeight: "bold", color: iconColor }}
        >
          Mohamed Ashraf
        </p>
        <p
          className="text"
          style={{
            paddingTop: "0",
            color: theme.palette.primary.dark,
            fontWeight: "bold",
          }}
        >
          Maneger
        </p>
      </ul>

      <ul>
        {menuItems1.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? theme.palette.mode === "dark"
                    ? "active-link-dark"
                    : "active-link-light"
                  : ""
              }
            >
              {item.icon}
              <p style={{ color: iconColor }}>{item.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <ul>
        {menuItems2.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? theme.palette.mode === "dark"
                    ? "active-link-dark"
                    : "active-link-light"
                  : ""
              }
            >
              {item.icon}
              <p style={{ color: iconColor }}>{item.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <ul>
        {menuItems3.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? theme.palette.mode === "dark"
                    ? "active-link-dark"
                    : "active-link-light"
                  : ""
              }
            >
              {item.icon}
              <p style={{ color: iconColor }}>{item.label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
