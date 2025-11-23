import { useContext } from "react";
import { ColorModeContext } from "../main.jsx"; // ← مسار حسب مكان ملفك
import { useTheme } from "@mui/material";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px 10px 50px",
        color: "white",
        background:
          theme.palette.mode === "dark"
            ? "#252525ff"
            : theme.palette.primary.dark,
      }}
    >
      <div className="search-bar">
        <SearchIcon />
        <input type="text" placeholder="Search..." style={{ border: "0" }} />
      </div>

      <ul style={{ display: "flex", gap: "15px" }}>
        <li onClick={colorMode.toggleColorMode} style={{ cursor: "pointer" }}>
          {theme.palette.mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </li>

        <li>
          <NotificationsOutlinedIcon />
        </li>
        <li>
          <SettingsOutlinedIcon />
        </li>
        <li>
          <PersonOutlineOutlinedIcon />
        </li>
      </ul>
    </nav>
  );
}
