import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material";

const data = [
  {
    id: "lisp",
    label: "lisp",
    value: 100,
    color: "hsl(346, 70%, 50%)",
  },
  {
    id: "css",
    label: "css",
    value: 217,
    color: "hsl(210, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 376,
    color: "hsla(133, 70%, 50%, 1.00)",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 367,
    color: "hsl(2, 70%, 50%)",
  },
  {
    id: "elixir",
    label: "elixir",
    value: 287,
    color: "hsl(239, 70%, 50%)",
  },
];

export default function ComponantPie({ isDashboard = false }) {
  const theme = useTheme();
  const colorChange = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <div style={{ height: isDashboard ? "50vh" : "75vh" }}>
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
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={isDashboard ? 0.75 : 0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        enableArcLinkLabels={isDashboard ? false : true}
        arcLinkLabelsTextColor={colorChange}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        legends={
          isDashboard
            ? ""
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolShape: "circle",
                },
              ]
        }
      />
    </div>
  );
}
