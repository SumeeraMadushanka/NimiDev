import React, { useState, useEffect } from "react";
import { Carousel, Spin } from "antd";

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
        <div>
          {loader === false ? (
            <center>
              <div className=" mt-56">
                <Spin />
              </div>
            </center>
          ) : (
            <img src={img3} style={contentStyle} />
          )}
        </div>
      </div>
    </>
  );
};

export default CarouselView;
