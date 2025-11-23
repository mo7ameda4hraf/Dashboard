import React from "react";
import { Paper, Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

export default function PaperCard({ icon, title, subTitle, increase, data }) {
  const theme = useTheme();
  const colorChange = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <div style={{ flexGrow: 1 }}>
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "240px",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ lineHeight: "1.5" }}>
          {icon}
          <h4>{title}</h4>
          <h5>{subTitle}</h5>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box height={"70px"} width={"70px"}>
            <ResponsivePie /* or Pie for fixed dimensions */
              data={data}
              theme={{
                text: {
                  fontSize: 11,
                  fill: colorChange,
                  outlineWidth: 0,
                  outlineColor: "#ffffff",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 14,
                      fill: colorChange,
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: colorChange,
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: colorChange,
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: colorChange,
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: colorChange,
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: colorChange,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  wrapper: {},
                  container: {
                    background: "#ffffff",
                    color: "#333333",
                    fontSize: 12,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
              innerRadius={0.7}
              padAngle={0.6}
              colors={{ scheme: "category10" }}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              enableArcLabels={false}
              enableArcLinkLabels={false}
            />
          </Box>
          <h4>{increase}</h4>
        </div>
      </Paper>
    </div>
  );
}
