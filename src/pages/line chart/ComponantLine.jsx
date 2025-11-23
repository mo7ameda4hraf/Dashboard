import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 188,
      },
      {
        x: "helicopter",
        y: 41,
      },
      {
        x: "boat",
        y: 63,
      },
      {
        x: "train",
        y: 68,
      },
      {
        x: "subway",
        y: 82,
      },
      {
        x: "bus",
        y: 274,
      },
      {
        x: "car",
        y: 130,
      },
      {
        x: "moto",
        y: 58,
      },
      {
        x: "bicycle",
        y: 92,
      },
      {
        x: "horse",
        y: 128,
      },
      {
        x: "skateboard",
        y: 117,
      },
      {
        x: "others",
        y: 41,
      },
    ],
  },
  {
    id: "france",
    data: [
      {
        x: "plane",
        y: 71,
      },
      {
        x: "helicopter",
        y: 98,
      },
      {
        x: "boat",
        y: 58,
      },
      {
        x: "train",
        y: 51,
      },
      {
        x: "subway",
        y: 132,
      },
      {
        x: "bus",
        y: 275,
      },
      {
        x: "car",
        y: 135,
      },
      {
        x: "moto",
        y: 30,
      },
      {
        x: "bicycle",
        y: 81,
      },
      {
        x: "horse",
        y: 206,
      },
      {
        x: "skateboard",
        y: 115,
      },
      {
        x: "others",
        y: 147,
      },
    ],
  },
  {
    id: "us",
    data: [
      {
        x: "plane",
        y: 271,
      },
      {
        x: "helicopter",
        y: 271,
      },
      {
        x: "boat",
        y: 251,
      },
      {
        x: "train",
        y: 259,
      },
      {
        x: "subway",
        y: 291,
      },
      {
        x: "bus",
        y: 14,
      },
      {
        x: "car",
        y: 182,
      },
      {
        x: "moto",
        y: 93,
      },
      {
        x: "bicycle",
        y: 163,
      },
      {
        x: "horse",
        y: 72,
      },
      {
        x: "skateboard",
        y: 215,
      },
      {
        x: "others",
        y: 133,
      },
    ],
  },
  {
    id: "germany",
    data: [
      {
        x: "plane",
        y: 293,
      },
      {
        x: "helicopter",
        y: 278,
      },
      {
        x: "boat",
        y: 7,
      },
      {
        x: "train",
        y: 87,
      },
      {
        x: "subway",
        y: 164,
      },
      {
        x: "bus",
        y: 133,
      },
      {
        x: "car",
        y: 13,
      },
      {
        x: "moto",
        y: 101,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 100,
      },
      {
        x: "skateboard",
        y: 68,
      },
      {
        x: "others",
        y: 225,
      },
    ],
  },
  {
    id: "norway",
    data: [
      {
        x: "plane",
        y: 5,
      },
      {
        x: "helicopter",
        y: 24,
      },
      {
        x: "boat",
        y: 299,
      },
      {
        x: "train",
        y: 197,
      },
      {
        x: "subway",
        y: 37,
      },
      {
        x: "bus",
        y: 52,
      },
      {
        x: "car",
        y: 143,
      },
      {
        x: "moto",
        y: 196,
      },
      {
        x: "bicycle",
        y: 265,
      },
      {
        x: "horse",
        y: 15,
      },
      {
        x: "skateboard",
        y: 113,
      },
      {
        x: "others",
        y: 38,
      },
    ],
  },
];
export default function ComponantLine({ isDashboard = false }) {
  const theme = useTheme();
  const colorChange = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <Box sx={{ height: isDashboard ? "300px" : "75vh" }}>
      <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
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
              stroke: isDashboard ? "" : theme.palette.divider,
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
        axisBottom={{
          legend: isDashboard ? "" : "transportation",
          legendOffset: 36,
        }}
        axisLeft={{ legend: isDashboard ? "" : "count", legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
}
