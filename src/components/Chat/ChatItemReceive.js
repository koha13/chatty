import React from "react";

export default ({ message }) => {
  return (
    <div className="d-flex justify-content-start mb-4">
      <div className="img_cont_msg">
        <img
          src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
          className="rounded-circle user_img_msg"
          alt="User avatar"
        />
      </div>
      <pre className="msg_cotainer">
        {message.content}
        {/* <span className="msg_time">8:40 AM, Today</span> */}
      </pre>
    </div>
  );
};
