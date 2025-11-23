import { Stack } from "@mui/material";
import React from "react";

//Icons:
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

//data:
import { data1, data2, data3, data4 } from "./Data";

import PaperCard from "./Paper";
export default function Row1() {
  return (
    <Stack
      direction={"row"}
      justifyContent={{ xs: "center", sm: "space-between" }}
      style={{
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <PaperCard
        icon={<EmailIcon style={{ color: "#c200ff", fontSize: "26px" }} />}
        title={"12.365"}
        subTitle={"Emails sent"}
        data={data1}
        increase={"+14%"}
      />
      <PaperCard
        icon={
          <PointOfSaleIcon style={{ color: "#c200ff", fontSize: "26px" }} />
        }
        title={"431.225"}
        subTitle={"Sales obtioned"}
        data={data2}
        increase={"+21%"}
      />
      <PaperCard
        icon={<PersonAddIcon style={{ color: "#c200ff", fontSize: "26px" }} />}
        title={"32.441"}
        subTitle={"New Clients"}
        data={data3}
        increase={"+5%"}
      />
      <PaperCard
        icon={<TrafficIcon style={{ color: "#c200ff", fontSize: "26px" }} />}
        title={"1.325.134"}
        subTitle={"Traffic Reseived"}
        data={data4}
        increase={"+43%"}
      />
    </Stack>
  );
}
