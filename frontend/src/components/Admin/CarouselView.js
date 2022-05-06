import React, { useState, useEffect } from "react";
import { Carousel, Spin } from "antd";
import img1 from "../Assets/Home/bg1.png";
import img2 from "../Assets/Home/bg2.png";
import img3 from "../Assets/Home/bg3.png";
import "antd/dist/antd.css";

const contentStyle = {
  height: "570px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselView = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);
  return (
    <>
      <div>
        <Carousel autoplay effect="fade">
          <center>{loader === false && <Spin />}</center>
          <div>
            <img src={img1} style={contentStyle} />
          </div>
          <div>
            <img src={img2} style={contentStyle} />
          </div>
          <div>
            <img src={img3} style={contentStyle} />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselView;
