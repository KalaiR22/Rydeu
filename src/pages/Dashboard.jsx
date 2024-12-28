import React, { useState } from "react";
import logodash from "../assets/Images/logodash.png";
import dashvector from "../assets/Images/dashvect.png";
import { dashboardside } from "../constants";
import leftarrow from "../assets/Images/leftarrow.png";
import OfferAnc from "../components/OfferAnc";
import Offer from "../components/Offer";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState(0); // Default active item is id=0

  const handleItemClick = (id) => {
    setActiveItem(id); // Set active item when clicked
  };

  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-[85px] h-full fixed bg-[#004A85]">
        <img src={logodash} alt="Logo" className="pt-[8px] mx-auto" />
        <div className="mt-16">
          {dashboardside.map((item) => (
            <div
              key={item.id}
              className={`${
                activeItem === item.id
                  ? "bg-[#ffffff16] border-l-4 border-white"
                  : ""
              }`} // Apply white background and left border when active
              onClick={() => handleItemClick(item.id)} // Change active item on click
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-fit w-fit mx-auto my-3 py-3"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#F2F2F2] flex-1 pl-6 pr-12 ml-[85px] overflow-y-scroll">
        {/* Header Section */}
        <div className="flex items-center justify-between py-5 float-right">
          <div className="flex items-center gap-3">
            <p className="font-lato flex items-center justify-center text-[12px] text-white bg-[#004A85] h-[28px] w-[28px] rounded-full font-extrabold leading-[14.4px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none">
              U
            </p>
            <p className="font-lato text-[11px] text-primblack font-normal leading-[13.2px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none">
              Username
            </p>
            <img src={dashvector} alt="" className="h-fit w-fit" />
          </div>
        </div>

        {/* Title Section */}
        <div className="flex items-center pt-16">
          <img src={leftarrow} alt="" className="h-fit w-fit mr-4" />
          <p className="text-[#161616] font-lato text-[24px] font-medium leading-[28.8px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none">
            Requests
          </p>
        </div>

        {/* Content Section with remaining height */}
        <div className="bg-white p-8 my-3 flex-1  ">
          <div className="border border-[#EFEFEF] mt-5"></div>
          <OfferAnc />
          <div className="border border-[#EFEFEF] mt-3"></div>
          <Offer />
          <button className="bg-primary text-white w-[133px] h-[37px] rounded-[6px]  mx-auto flex items-center justify-center mt-2 font-lato text-[16px] font-normal leading-[19.2px] tracking-[0.015em] text-center underline-offset-auto decoration-skip-ink-none">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
