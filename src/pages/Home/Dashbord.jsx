import { Box, useTheme, Button } from "@mui/material";
//Componant chart:
import ComponantLine from "../line chart/ComponantLine";
import ComponantPar from "../par chart/ComponantPar";
import ComponantPie from "../pie chart/ComponantPie";
import ComponantGeography from "../geagraphy/ComponantGeo";
//Rows:
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
//Icons:
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";

export default function PageDashbord() {
  const theme = useTheme();
  const colorChange = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <div style={{ width: "98%", margin: "0 auto" }}>
      <Box className="head" style={{ marginBottom: "30px" }}>
        <h1 style={{ color: theme.palette.primary.dark, fontWeight: "bold" }}>
          Dashboard
        </h1>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: colorChange,
          }}
        >
          Welcome To Dashboard
        </p>
      </Box>
      <div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button
            varient="text"
            style={{
              background: "rgb(107 189 255)",
              color: "#000",
            }}
          >
            <GetAppOutlinedIcon />
            Download Reports
          </Button>
        </div>
        {/*---------------------------ROWS--------------------*/}
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
    </div>
  );
}
