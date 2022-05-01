import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "antd/dist/antd.css";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  console.log(location);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-10">
        <div className="md:flex items-center justify-between bg-zinc-800 py-1 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-sky-600">
            <div className=" text-6xl translate-y-0.5">
              <ion-icon name="logo-wordpress"></ion-icon>
            </div>
            <NavLink to="/">
              <span class="ml-3 text-xl pl-1 text-sky-600">
                WinMac Computers
              </span>
            </NavLink>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu-sharp"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center font-semibold md:pb-0 mt-3  pb-0 absolute md:static bg-zinc-800  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
              open ? "top-21 opacity-100" : "top-[-490px]"
            } md:opacity-100`}
          >
            {Links.map((Link) => (
              <li key={Link.name} className="md:ml-2 text-base md:my-0 my-7">
                <a
                  href={Link.link}
                  className=" text-white hover:text-sky-500 hover:bg-gray-700 py-2 hover:py-2 px-4 hover:px-4 hover:rounded-full  duration-500"
                >
                  {Link.name}
                </a>
              </li>
            ))}
            <div className="flex space-x-6">
              {pathname === "/" ||
              pathname === "/login" ||
              pathname === "/register" ||
              pathname === "/contact" ||
              pathname === "/services" ||
              pathname === "/about" ? (
                <NavLink to="/login">
                  <button className="inline-flex items-center bg-red-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded-full text-base mt-4 md:mt-0 translate-x-6">
                    Login
                    <ion-icon name="log-in"></ion-icon>
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <button className="inline-flex items-center bg-sky-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded-full text-base mt-4 md:mt-0 translate-x-6">
                    Logout
                    <ion-icon name="log-out"></ion-icon>
                  </button>
                </NavLink>
              )}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;