import React from "react";
import "./Newsletter.scss";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <div className="news-container">
      <div className="title">Newsletter</div>
      <div className="description">Lorem Ipsum is simply dummy text of the printing.</div>
      <div className="input-container">
        <input placeholder="Your Email" />
        <button className="button">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
