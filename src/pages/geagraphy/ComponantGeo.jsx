import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from "./world-countries";

const data = [
  {
    id: "AFG",
    value: 24796,
  },
  {
    id: "AGO",
    value: 66476,
  },
  {
    id: "ALB",
    value: 104329,
  },
  {
    id: "ARE",
    value: 783044,
  },
  {
    id: "ARG",
    value: 441474,
  },
  {
    id: "ARM",
    value: 85909,
  },
  {
    id: "ATA",
    value: 265350,
  },
  {
    id: "ATF",
    value: 725552,
  },
  {
    id: "AUT",
    value: 217216,
  },
  {
    id: "AZE",
    value: 369027,
  },
  {
    id: "BDI",
    value: 798766,
  },
  {
    id: "BEL",
    value: 610408,
  },
  {
    id: "BEN",
    value: 108322,
  },
  {
    id: "BFA",
    value: 889410,
  },
  {
    id: "BGD",
    value: 22460,
  },
  {
    id: "BGR",
    value: 219952,
  },
  {
    id: "BHS",
    value: 612031,
  },
  {
    id: "BIH",
    value: 546636,
  },
  {
    id: "BLR",
    value: 66346,
  },
  {
    id: "BLZ",
    value: 551574,
  },
  {
    id: "BOL",
    value: 281499,
  },
  {
    id: "BRN",
    value: 377537,
  },
  {
    id: "BTN",
    value: 120466,
  },
  {
    id: "BWA",
    value: 944617,
  },
  {
    id: "CAF",
    value: 936423,
  },
  {
    id: "CAN",
    value: 849199,
  },
  {
    id: "CHE",
    value: 424837,
  },
  {
    id: "CHL",
    value: 306440,
  },
  {
    id: "CHN",
    value: 274923,
  },
  {
    id: "CIV",
    value: 237555,
  },
  {
    id: "CMR",
    value: 194056,
  },
  {
    id: "COG",
    value: 702208,
  },
  {
    id: "COL",
    value: 577201,
  },
  {
    id: "CRI",
    value: 737139,
  },
  {
    id: "CUB",
    value: 328672,
  },
  {
    id: "-99",
    value: 639769,
  },
  {
    id: "CYP",
    value: 902449,
  },
  {
    id: "CZE",
    value: 224926,
  },
  {
    id: "DEU",
    value: 491234,
  },
  {
    id: "DJI",
    value: 398113,
  },
  {
    id: "DNK",
    value: 123528,
  },
  {
    id: "DOM",
    value: 51208,
  },
  {
    id: "DZA",
    value: 473707,
  },
  {
    id: "ECU",
    value: 848239,
  },
  {
    id: "EGY",
    value: 500000,
  },
  {
    id: "ERI",
    value: 168688,
  },
  {
    id: "ESP",
    value: 325827,
  },
  {
    id: "EST",
    value: 203791,
  },
  {
    id: "ETH",
    value: 193270,
  },
  {
    id: "FIN",
    value: 152441,
  },
  {
    id: "FJI",
    value: 168538,
  },
  {
    id: "FLK",
    value: 913340,
  },
  {
    id: "FRA",
    value: 247656,
  },
  {
    id: "GAB",
    value: 625692,
  },
  {
    id: "GBR",
    value: 536398,
  },
  {
    id: "GEO",
    value: 449214,
  },
  {
    id: "GHA",
    value: 176033,
  },
  {
    id: "GIN",
    value: 796735,
  },
  {
    id: "GMB",
    value: 852370,
  },
  {
    id: "GNB",
    value: 801839,
  },
  {
    id: "GNQ",
    value: 548609,
  },
  {
    id: "GRC",
    value: 403992,
  },
  {
    id: "GTM",
    value: 792430,
  },
  {
    id: "GUY",
    value: 931427,
  },
  {
    id: "HND",
    value: 725310,
  },
  {
    id: "HRV",
    value: 862910,
  },
  {
    id: "HTI",
    value: 719991,
  },
  {
    id: "HUN",
    value: 140259,
  },
  {
    id: "IDN",
    value: 416744,
  },
  {
    id: "IND",
    value: 213552,
  },
  {
    id: "IRL",
    value: 912698,
  },
  {
    id: "IRN",
    value: 694619,
  },
  {
    id: "IRQ",
    value: 566569,
  },
  {
    id: "ISL",
    value: 981034,
  },
  {
    id: "ISR",
    value: 461041,
  },
  {
    id: "ITA",
    value: 65283,
  },
  {
    id: "JAM",
    value: 873003,
  },
  {
    id: "JOR",
    value: 447389,
  },
  {
    id: "JPN",
    value: 115576,
  },
  {
    id: "KAZ",
    value: 999458,
  },
  {
    id: "KEN",
    value: 335770,
  },
  {
    id: "KGZ",
    value: 11464,
  },
  {
    id: "KHM",
    value: 752646,
  },
  {
    id: "OSA",
    value: 977105,
  },
  {
    id: "KWT",
    value: 266106,
  },
  {
    id: "LAO",
    value: 545535,
  },
  {
    id: "LBN",
    value: 404779,
  },
  {
    id: "LBR",
    value: 382577,
  },
  {
    id: "LBY",
    value: 60608,
  },
  {
    id: "LKA",
    value: 876121,
  },
  {
    id: "LSO",
    value: 236653,
  },
  {
    id: "LTU",
    value: 744550,
  },
  {
    id: "LUX",
    value: 819314,
  },
  {
    id: "LVA",
    value: 35554,
  },
  {
    id: "MAR",
    value: 869225,
  },
  {
    id: "MDA",
    value: 720738,
  },
  {
    id: "MDG",
    value: 407083,
  },
  {
    id: "MEX",
    value: 825467,
  },
  {
    id: "MKD",
    value: 95567,
  },
  {
    id: "MLI",
    value: 811312,
  },
  {
    id: "MMR",
    value: 691039,
  },
  {
    id: "MNE",
    value: 14169,
  },
  {
    id: "MNG",
    value: 469698,
  },
  {
    id: "MOZ",
    value: 911793,
  },
  {
    id: "MRT",
    value: 753528,
  },
  {
    id: "MWI",
    value: 254996,
  },
  {
    id: "MYS",
    value: 192077,
  },
  {
    id: "NAM",
    value: 659599,
  },
  {
    id: "NCL",
    value: 946802,
  },
  {
    id: "NER",
    value: 333033,
  },
  {
    id: "NGA",
    value: 565796,
  },
  {
    id: "NIC",
    value: 342592,
  },
  {
    id: "NLD",
    value: 870904,
  },
  {
    id: "NOR",
    value: 117369,
  },
  {
    id: "NPL",
    value: 369363,
  },
  {
    id: "NZL",
    value: 891902,
  },
  {
    id: "OMN",
    value: 656299,
  },
  {
    id: "PAK",
    value: 583694,
  },
  {
    id: "PAN",
    value: 153184,
  },
  {
    id: "PER",
    value: 302092,
  },
  {
    id: "PHL",
    value: 140757,
  },
  {
    id: "PNG",
    value: 357832,
  },
  {
    id: "POL",
    value: 699377,
  },
  {
    id: "PRI",
    value: 947000,
  },
  {
    id: "PRT",
    value: 240601,
  },
  {
    id: "PRY",
    value: 769120,
  },
  {
    id: "QAT",
    value: 225722,
  },
  {
    id: "ROU",
    value: 231081,
  },
  {
    id: "RUS",
    value: 418945,
  },
  {
    id: "RWA",
    value: 482919,
  },
  {
    id: "ESH",
    value: 697725,
  },
  {
    id: "SAU",
    value: 244135,
  },
  {
    id: "SDN",
    value: 406731,
  },
  {
    id: "SDS",
    value: 661868,
  },
  {
    id: "SEN",
    value: 441955,
  },
  {
    id: "SLB",
    value: 388868,
  },
  {
    id: "SLE",
    value: 32417,
  },
  {
    id: "SLV",
    value: 517263,
  },
  {
    id: "ABV",
    value: 952620,
  },
  {
    id: "SOM",
    value: 396803,
  },
  {
    id: "SRB",
    value: 765137,
  },
  {
    id: "SUR",
    value: 993472,
  },
  {
    id: "SVK",
    value: 426737,
  },
  {
    id: "SVN",
    value: 451908,
  },
  {
    id: "SWZ",
    value: 256615,
  },
  {
    id: "SYR",
    value: 291565,
  },
  {
    id: "TCD",
    value: 850160,
  },
  {
    id: "TGO",
    value: 365294,
  },
  {
    id: "THA",
    value: 622597,
  },
  {
    id: "TJK",
    value: 371157,
  },
  {
    id: "TKM",
    value: 494614,
  },
  {
    id: "TLS",
    value: 712638,
  },
  {
    id: "TTO",
    value: 493393,
  },
  {
    id: "TUN",
    value: 935465,
  },
  {
    id: "TUR",
    value: 138371,
  },
  {
    id: "TWN",
    value: 561291,
  },
  {
    id: "TZA",
    value: 722465,
  },
  {
    id: "UGA",
    value: 307887,
  },
  {
    id: "UKR",
    value: 923756,
  },
  {
    id: "URY",
    value: 439607,
  },
  {
    id: "USA",
    value: 404223,
  },
  {
    id: "UZB",
    value: 953665,
  },
  {
    id: "VEN",
    value: 75084,
  },
  {
    id: "VNM",
    value: 205139,
  },
  {
    id: "VUT",
    value: 452236,
  },
  {
    id: "PSE",
    value: 64979,
  },
  {
    id: "YEM",
    value: 801192,
  },
  {
    id: "ZAF",
    value: 747945,
  },
  {
    id: "ZMB",
    value: 791678,
  },
  {
    id: "ZWE",
    value: 84766,
  },
  {
    id: "KOR",
    value: 278509,
  },
];
export default function ComponantGeography({ isDashboard = false }) {
  const theme = useTheme();
  const colorChange = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <Box
      sx={{
        height: "75vh",
        border: isDashboard ? 0 : `1px solid ${colorChange}`,
      }}
    >
      <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
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
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        projectionScale={isDashboard ? 100 : 110}
        borderColor="#152538"
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -50,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: colorChange,
            itemOpacity: 0.85,
            symbolSize: 18,
          },
        ]}
      />
    </Box>
  );
}
