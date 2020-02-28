import React from "react";

export default () => {
  return (
    <a className="list-group-item list-group-item-action rounded-0 usb-user active">
      <div className="media">
        <img
          src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
          alt="user"
          width="50"
          className="rounded-circle"
        />
        <div className="media-body ml-4 d-inline-block text-truncate">
          <div className="d-flex align-items-center justify-content-between mb-1">
            <h6 className="mb-0">Jason Doe</h6>
            <small className="small font-weight-bold">25 Dec</small>
          </div>
          <p className="mb-0 text-small d-inline-block text-truncate mw-100">
            Lorem ipsum dolor sit amwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          </p>
        </div>
      </div>
    </a>
  );
};
