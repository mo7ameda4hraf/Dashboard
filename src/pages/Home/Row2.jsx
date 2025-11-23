import { Theme } from "@fullcalendar/core/internal";
import { Box, IconButton, useTheme, Paper, Stack } from "@mui/material";
import React from "react";
import ComponantLine from "../line chart/ComponantLine";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { recentData } from "./Data";

export default function Row2() {
  const theme = useTheme();
  const colorChange = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <Stack direction={"row"} flexWrap={"wrap"} marginTop={"20px"} gap={"10px"}>
      <Paper sx={{ maxWidth: "900px", minWidth: "300px", flexGrow: 1 }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          style={{ padding: "34px 34px 0" }}
        >
          <div>
            <h1 style={{ color: "#d500f9" }}>Revenue Generated</h1>
            <h3>$56.151.965</h3>
          </div>
          <IconButton sx={{ width: "50px", height: "50px" }}>
            <DownloadOutlinedIcon
              sx={{ fontSize: "28px", color: colorChange }}
            />
          </IconButton>
        </Stack>
        <ComponantLine isDashboard={true} />
      </Paper>
      {/* ------------------- */}
      <Box
        sx={{
          height: "420px",
          width: "400px",
          overflow: "hidden",
          overflowY: "scroll",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Paper
          sx={{
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "#d500f9" }}>Recent Transactions</h1>
        </Paper>
        {recentData.map((item) => {
          return (
            <Paper sx={{ padding: "15px" }}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box sx={{ lineHeight: "1.3" }}>
                  <h4>{item.txId}</h4>
                  <p>{item.user}</p>
                </Box>
                <h4>{item.date}</h4>
                <h4
                  style={{
                    background: "#ff5e00ff",
                    color: "white",
                    borderRadius: "10px",
                    padding: "7px 12px",
                  }}
                >
                  {item.cost}
                </h4>
              </Stack>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
