import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import { withRouter } from "react-router-dom";
class Sidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        {window.innerWidth <= 700 ? (
          <React.Fragment>
            {this.props.location.pathname === "/room" && (
              <div className="col-12 col-sm-0 h-100 user-box">
                <SidebarHeader />
                <SidebarBody />
              </div>
            )}
          </React.Fragment>
        ) : (
          <div className="col-3 col-sm-0 h-100 user-box">
            <SidebarHeader />
            <SidebarBody />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Sidebar);
