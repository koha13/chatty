import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-3 h-100 user-box">
        <SidebarHeader />

        <SidebarBody />
      </div>
    );
  }
}
