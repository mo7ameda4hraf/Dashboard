import { Stack, Paper } from "@mui/material";
import React from "react";
//Chart Component:
import ComponantPar from "../par chart/ComponantPar";
import ComponantPie from "../pie chart/ComponantPie";
import ComponantGeography from "../geagraphy/ComponantGeo";

export default function Row3() {
  return (
    <Stack
      direction={"row"}
      gap={"20px"}
      marginTop={"20px"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      <Paper style={{ minWidth: "400px", flexFlow: 1 }}>
        <h1 style={{ color: "#d500f9", padding: "20px" }}>Compaign</h1>
        <ComponantPie isDashboard={true} />
        <div style={{ textAlign: "center" }}>
          <h2>$48.2136 revenue generated</h2>
          <h4>Includes extra expenditures and costs</h4>
        </div>
      </Paper>
      <Paper style={{ minWidth: "400px", flexFlow: 1 }}>
        <h1 style={{ color: "#d500f9", padding: "20px" }}>Sales Quantity</h1>
        <ComponantPar isDashboard={true} />
      </Paper>
      <Paper style={{ minWidth: "400px", flexFlow: 1 }}>
        <h1 style={{ color: "#d500f9", padding: "20px" }}>
          Geography Based Traffic
        </h1>
        <ComponantGeography isDashboard={true} />
      </Paper>
    </Stack>
  );
}
