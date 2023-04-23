import * as React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import classes from "../../styles/LabTabs.module.scss";
import FirstItems from "./FirstItems";
import SecondItems from "./SecondItems";
import ThirdItems from "./ThirdItems";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <Box
      data-aos="fade-up"
      data-aos-delay="200"
      className={classes.container}
      sx={{ typography: "body1", width: "100%" }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            className={classes.container__tabs}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { background: "aqua" },
            }}
            sx={{
              "& button.Mui-selected": {
                color: "#018f8fc0",
                fontWeight: "600",
                fontSize: "1.7rem",
                "@media (max-width: 500px)": {
                  fontSize: "3.5vw",
                },
                "@media (max-width: 400px)": {
                  fontSize: "3.3vw",
                },
              },
            }}
          >
            <Tab
              sx={{ textTransform: "capitalize " }}
              label="Trending"
              value="1"
            />
            <Tab
              sx={{ textTransform: "capitalize " }}
              label="Top Volume"
              value="2"
            />
            <Tab
              sx={{ textTransform: "capitalize " }}
              label="New Coins"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <FirstItems />
        </TabPanel>
        <TabPanel value="2">
          <SecondItems />
        </TabPanel>
        <TabPanel value="3">
          <ThirdItems />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
