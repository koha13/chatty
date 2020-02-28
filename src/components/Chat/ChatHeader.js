import React from "react";

export default () => {
  return (
    <div className="cb-header d-flex flex-row justify-content-start align-items-center px-2">
      <div className="img-contain m-2" style={{ width: "50px" }}>
        <img
          src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
          alt="user"
          width="50"
          className="rounded-circle"
        />
      </div>
      <div className="flex-grow-1 d-flex flex-column justify-content-center">
        <h6 className="p-0 m-0">Jason Doe</h6>
        <p className="p-0 m-0 text-small text-muted">100000 messages</p>
      </div>
      <i className="fas fa-ellipsis-v m-2"></i>
    </div>
  );
};
