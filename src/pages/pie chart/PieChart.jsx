import ComponantPie from "./ComponantPie";
import { Box, useTheme } from "@mui/material";

export default function PagePieChart() {
  const theme = useTheme();
  const colorChange = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <div style={{ width: "98%", margin: "0 auto" }}>
      <Box className="head" style={{ marginBottom: "30px" }}>
        <h1 style={{ color: theme.palette.primary.dark, fontWeight: "bold" }}>
          Pie Chart
        </h1>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: colorChange,
          }}
        >
          Simple Pie Chart
        </p>
      </Box>
      <ComponantPie />
    </div>
  );
}
