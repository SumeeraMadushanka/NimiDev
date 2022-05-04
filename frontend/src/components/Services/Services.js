import React from "react";

import IMG1 from "../Assets/Services/img1.jpg";
import IMG2 from "../Assets/Services/istockphoto-1263074041-612x612.jpg";
import IMG3 from "../Assets/Services/purple-computer-gaming-set-vector.jpg";

const Services = () => {
  return (
    <>
      <div className="bg-slate-200" id="services">
        <div className="text-center pt-16 translate-y-8 md:translate-y-20">
          <span className=" text-5xl text-black font-semibold font-Poppins">
            What are the Services of us ?
          </span>
        </div>
        <div className="container  mx-auto p-10 md:p-36 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          <div className="hover:bg-red-600 overflow-hidden shadow-lg outline outline-red-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 scale-90">
            <img className="w-full" src={IMG1} alt="" />
            <div className="px-6 py-4 transition duration-300 ease-in">
              <div className="font-bold text-xl mb-2">
                Warrenty Claiming and Customer Care
              </div>
              <p className="text-gray-700 text-base hover:text-white transition duration-300 ease-in">
                In case of faulty products, we have an upstanding warranty and
                claim procedures to make sure that your requirements are met in
                minimum time loss as possible. Most of our suppliers are based
                locally, so we assure you that we can arrange the best possible
                warranty claim service, provided that the following conditions
                are met.
              </p>
            </div>
          </div>

          <div className="hover:bg-orange-500 overflow-hidden shadow-lg outline outline-orange-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 scale-90">
            <img className="w-full" src={IMG2} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2">
                PC Building and Repairing
              </div>
              <p className="text-gray-700 text-base hover:text-white transition duration-300 ease-in">
                This is for physical damages that are incurred by the computer
                or its accessories. This includes installing new hardware,
                repairing or updating hardware, etc. There are many computer
                accessories like scanners and printers which might need repair
                due to damage. A professional computer technician that
                specializes in computer hardware will be able to fix such
                issues.
              </p>
            </div>
          </div>

          <div className=" hover:bg-sky-500 overflow-hidden shadow-lg outline outline-sky-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 scale-90">
            <img className="w-full" src={IMG3} alt="" />
            <div className="px-6 py-4 transition duration-300 ease-in">
              <div className="font-bold text-2xl mb-2">
                Computer Parts and Accessories
              </div>
              <p className="text-gray-700 text-base hover:text-white transition duration-300 ease-in">
                Need a part? We keep a small inventory of the more common parts
                and accessories for your computer or laptop. Cables, adapters,
                mice, external and portable storage and more. If we don’t have
                the part you are looking for, or need a specific part like a
                laptop battery or screen, we can special order them in and
                usually have it in a couple days. We also have a variety of used
                and refurbished parts at great prices. Stop by and see what we
                have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
