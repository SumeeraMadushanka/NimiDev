import React from "react";

import BG from "../Assets/About/about-us.jpg";

const About = () => {
  return (
    <div>
      <img src={BG} alt="bg" />
      <div className="bg-black text-gray-400 text-base p-2 h-72">
        <span className=" font-semibold">
          Welcome to WinMac Computers, your number one source for all things
          tech. We're dedicated to giving you the very best of computer parts,
          with a focus on quality, price, brand. <br />
          <br />
          Founded in 2022, WinMac Computers has come a long way from its
          beginnings in his home. When WinMac Computers first started out, it's
          passion for "quality and affordable tech products" drove us to start
          this so, that WinMac Computers can offer you latest products to your
          doorstep. We now serve customers all over Sri Lanka, and are thrilled
          that we're able to turn our passion into our own website. <br />
          <br />
          We hope that, you enjoy the products as much as we enjoy offering them
          to you. If you have any questions or comments, please don't hesitate
          to contact us. <br />
          <br />
          WinMac Computers
        </span>
      </div>
    </div>
  );
};

export default About;
