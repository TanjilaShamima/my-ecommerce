import React, { useState } from "react";
import "./Slider.scss";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../../data/slider";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const handleClick = (direction: string) => {
    if(direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0)
    }
  };
  return (
    <div className="slider-container">
      <div
        className="arrow"
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlinedIcon />
      </div>
      <div className="wrapper" style={{transform : `translate(${slideIndex * -100}vw)`}}>
        {sliderItems.map((item, index) => {
          return (
            <div
              className="slider"
              style={{ backgroundColor: `${item.bg}` }}
              key={index}
            >
              <div className="image-container">
                <div className="image">
                  <img src={item.img} alt="slider" />
                </div>
              </div>
              <div className="info-container">
                <h1 className="title">{item.title}</h1>
                <p className="description">{item.description}</p>
                <button className="button">SHOW NOW</button>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="arrow"
        style={{ right: "10px" }}
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
