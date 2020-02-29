import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";

export default props => {
  return (
    <NavLink
      to={"/room/" + props.num}
      className="list-group-item list-group-item-action rounded-0 usb-user "
      activeClassName="active"
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
            <h6 className="mb-0">{props.room._id}</h6>
          </div>
          <small className="small font-weight-bold">
            {props.room.updatedAt}
          </small>
        </div>
      </div>
    </NavLink>
  );
};
