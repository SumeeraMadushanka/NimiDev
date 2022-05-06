import React from "react";
import { NavLink } from "react-router-dom";
import { Image, Button } from "antd";

import processor from "../Assets/User/processor.jpg";
import motherbord from "../Assets/User/motherbord.jpg";
import monitor from "../Assets/User/monitor.jpg";
import casing from "../Assets/User/casing.jpg";
import storage from "../Assets/User/storage.jpg";
import graphic from "../Assets/User/graphics.jpg";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const User = () => {
  return (
    <div className="bg-gray-800 ">
      <section className="block mx-auto">
        <center>
          <div className="container">
            <div className=" inline-block columns-2  my-6 gap-24">
              <div>
                <Image
                  data-aos="fade-right"
                  style={{ width: 300 }}
                  src={processor}
                  preview={false}
                />
                <div className="top-1/2 w-full text-center text-4xl">
                  <NavLink
                    to={`/user-dashboard/${localStorage.getItem(
                      "firstName"
                    )}?_optProcessor=processor`}
                  >
                    <Button
                      data-aos="zoom-in"
                      type="primary"
                      size="large"
                      block
                    >
                      <div className=" font-semibold text-xl">PROCESSOR</div>
                    </Button>
                  </NavLink>
                </div>
              </div>
              <br />
              <br />
              <div>
                <Image
                  data-aos="fade-right"
                  style={{ width: 300 }}
                  src={motherbord}
                  preview={false}
                />
                <div className="top-1/2 w-full text-center text-4xl">
                  <NavLink
                    to={`/user-dashboard/${localStorage.getItem(
                      "firstName"
                    )}?_optLaptop=laptop`}
                  >
                    <Button
                      data-aos="zoom-in"
                      type="primary"
                      size="large"
                      block
                    >
                      <div className=" font-semibold text-xl">Laptop</div>
                    </Button>
                  </NavLink>
                </div>
              </div>
              <br />
              <br />
              <div>
                <Image
                  data-aos="fade-right"
                  style={{ width: 300 }}
                  src={graphic}
                  preview={false}
                />
                <div className="top-1/2 w-full text-center text-4xl">
                  <NavLink
                    to={`/user-dashboard/${localStorage.getItem(
                      "firstName"
                    )}?_optGraphicCard=graphic_card`}
                  >
                    <Button
                      data-aos="zoom-in"
                      type="primary"
                      size="large"
                      block
                    >
                      <div className=" font-semibold text-xl">
                        GRAPHIC CARDS
                      </div>
                    </Button>
                  </NavLink>
                </div>
              </div>
              <br />
              <br />
              <div>
                <Image
                  data-aos="fade-left"
                  style={{ width: 300 }}
                  src={monitor}
                  preview={false}
                />
                <div className="top-1/2 w-full text-center text-4xl">
                  <NavLink
                    to={`/user-dashboard/${localStorage.getItem(
                      "firstName"
                    )}?_optMonitor=monitor`}
                  >
                    <Button
                      data-aos="zoom-in"
                      type="primary"
                      size="large"
                      block
                    >
                      <div className=" font-semibold text-xl">MONITORS</div>
                    </Button>
                  </NavLink>
                </div>
              </div>
              <br />
              <br />
              <div>
                <Image
                  data-aos="fade-left"
                  style={{ width: 300 }}
                  src={storage}
                  preview={false}
                />
                <div className="top-1/2 w-full text-center text-4xl">
                  <NavLink
                    to={`/user-dashboard/${localStorage.getItem(
                      "firstName"
                    )}?_optStorageDrive=storage_drive`}
                  >
                    <Button
                      data-aos="zoom-in"
                      type="primary"
                      size="large"
                      block
                    >
                      <div className=" font-semibold text-xl">
                        STORAGE DRIVES
                      </div>
                    </Button>
                  </NavLink>
                </div>
              </div>
              <br />
              <br />
              <div>
                <Image
                  data-aos="fade-left"
                  style={{ width: 300 }}
                  src={casing}
                  preview={false}
                />
                <div className="top-1/2 w-full text-center text-4xl">
                  <NavLink
                    to={`/user-dashboard/${localStorage.getItem(
                      "firstName"
                    )}?_optPCcase=pc_case`}
                  >
                    <Button
                      data-aos="zoom-in"
                      type="primary"
                      size="large"
                      block
                    >
                      <div className=" font-semibold text-xl">CASING</div>
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </center>
      </section>
    </div>
  );
};

export default User;
