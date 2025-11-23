import { Box, useTheme } from "@mui/material";
import ComponantPar from "./ComponantPar";

export default function PageBarChart() {
  const theme = useTheme();
  const colorChange = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <div style={{ width: "98%", margin: "0 auto" }}>
      <Box className="head" style={{ marginBottom: "30px" }}>
        <h1 style={{ color: theme.palette.primary.dark, fontWeight: "bold" }}>
          Par Chart
        </h1>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: colorChange,
          }}
        >
          The Minimum Wage in Germany, France and Spain (EUR/monyh)
        </p>
      </Box>
      <ComponantPar />
    </div>
  );
}
