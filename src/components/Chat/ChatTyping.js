import React from "react";

export default () => {
  return (
    <form>
      <div className="input-group my-1 border border-1 border-dark rounded">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-images"></i>
          </span>
        </div>
        <textarea type="text" className="form-control" rows="1"></textarea>
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fa fa-paper-plane"></i>
          </span>
        </div>
      </div>
    </form>
  );
};
