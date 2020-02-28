import React from "react";

export default () => {
  return (
    <div className="usb-header">
      <form className="w-100 d-flex flex-row justify-content-start align-items-center">
        <input
          className="form-control form-control-sm mr-3 w-100 flex-grow-1"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <i className="fas fa-search" style={{ color: "white" }}></i>
      </form>
    </div>
  );
};
