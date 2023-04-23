import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SpotTrading from "./SpotTrading";
import MarginTrading from "./MarginTrading";

function TradeBox() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              sx={{
                fontSize: "1.5rem",
                color: "#666",
                textTransform: "capitalize",
              }}
              label="Spot Trading"
              value="1"
            />
            <Tab
              sx={{
                fontSize: "1.5rem",
                color: "#666",
                textTransform: "capitalize",
              }}
              label="Margin Trading"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <SpotTrading />
        </TabPanel>
        <TabPanel value="2">
          <MarginTrading />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
export default TradeBox;
