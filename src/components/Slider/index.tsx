import React from "react";
import "./Slider.scss";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="arrow" style={{ left: "10px" }}>
        <ArrowLeftOutlinedIcon />
      </div>
      <div className="wrapper">
        <div className="slider">
          <div className="image-container">
            <div className="image">
              <img src="/images/slider2.png" alt="slider" />
            </div>
          </div>
          <div className="info-container">
            <h1 className="title">SUMMER SALE</h1>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <button className="button">SHOW NOW</button>
          </div>
        </div>
      </div>
      <div className="arrow" style={{ right: "10px" }}>
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
