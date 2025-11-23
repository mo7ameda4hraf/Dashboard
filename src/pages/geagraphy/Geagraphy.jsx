import ComponantGeography from "./ComponantGeo";
import { Box, useTheme } from "@mui/material";

export default function PageLineChart() {
  const theme = useTheme();
  const colorChange = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <div style={{ width: "98%", margin: "0 auto" }}>
      <Box className="head" style={{ marginBottom: "30px" }}>
        <h1 style={{ color: theme.palette.primary.dark, fontWeight: "bold" }}>
          Gragraphy
        </h1>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: colorChange,
          }}
        >
          Simple Gragraphy
        </p>
      </Box>
      <ComponantGeography />
    </div>
  );
}
