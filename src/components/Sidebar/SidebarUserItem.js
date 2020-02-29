import React from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";

export default () => {
  return (
    <Link
      to="/room/1"
      className="list-group-item list-group-item-action rounded-0 usb-user active"
    >
      <div className="media">
        <Badge
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          color="error"
          badgeContent={"offline"}
        >
          <img
            alt="User avatar"
            src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
            width="50"
            className="rounded-circle"
          />
        </Badge>

        <div className="media-body ml-4 d-inline-block text-truncate">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <h6 className="mb-0">Jason Doe</h6>
          </div>
          <small className="small font-weight-bold">25 Dec</small>
        </div>
      </div>
    </Link>
  );
};
