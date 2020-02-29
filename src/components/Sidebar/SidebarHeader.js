import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="usb-header">
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
        className="mb-1"
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Chat" style={{ width: "50%" }} />
          <Tab label="Active" style={{ width: "50%" }} />
        </Tabs>
      </AppBar>
    </div>
  );
};
