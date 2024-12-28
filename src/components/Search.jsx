import React, { useState } from "react";
import Calander from '../assets/Images/Calander.png'
import eml from '../assets/Images/eml.png'
import flagin from '../assets/Images/flagin.png'
import swap from "../assets/Images/swap.png";
import Vector from "../assets/Images/Vector.png";
import smallvector from "../assets/Images/smallvector.png";
import passenger from "../assets/Images/passenger.png";

const Search = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("oneway");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full sm:w-[430px] h-[491px] bg-white rounded-[7px] shadow-[0px_4px_20px_0px_#00000030] mt-[111px] px-1 sm:px-0 ">
      <div className="h-[54px] bg-[#F4F4F4] p-[4px] flex justify-between items-center rounded-[6px]">
        {/* One way Tab */}
        <p
          className={`px-[32px] h-full flex justify-center items-center rounded-[4px] font-montserrat text-[14px] leading-[17.07px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none cursor-pointer ${
            activeTab === "oneway"
              ? "bg-white text-primary font-bold" // Active tab styles
              : "text-primblack font-medium" // Inactive tab styles
          }`}
          onClick={() => handleTabChange("oneway")}
        >
          One way
        </p>

        {/* Round Trip Tab */}
        <p
          className={`px-[32px] h-full cursor-pointer flex justify-center items-center text-left font-montserrat text-[14px] leading-[17.07px] tracking-[0.04em] underline-offset-auto decoration-skip-ink-none ${
            activeTab === "roundtrip"
              ? "bg-white text-primary font-bold" // Active tab styles
              : "text-primblack font-medium" // Inactive tab styles
          }`}
          onClick={() => handleTabChange("roundtrip")}
        >
          Round Trip
        </p>

        {/* Hourly Tab */}
        <p
          className={`px-[32px] h-full flex cursor-pointer justify-center items-center text-left font-montserrat text-[14px] leading-[17.07px] tracking-[0.04em] underline-offset-auto decoration-skip-ink-none ${
            activeTab === "hourly"
              ? "bg-white text-primary font-bold" // Active tab styles
              : "text-primblack font-medium" // Inactive tab styles
          }`}
          onClick={() => handleTabChange("hourly")}
        >
          Hourly
        </p>
      </div>
      <div className="bg-white ">
        <div className="px-[18px]">
          <div className="border-b border-[#EDEDED] py-[17px] px-[10px] flex items-center relative">
            <span className="font-montserrat text-[14px] font-semibold leading-[17.07px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none text-[#777777]">
              From{" "}
            </span>
            <input
              type="text"
              placeholder="( airport, hotel, address )"
              class="px-1 w-full border-none font-montserrat text-[14px] font-medium placeholder:font-montserrat placeholder:text-[14px] placeholder:font-regular placeholder:leading-[17.07px] placeholder:tracking-[0.02em] placeholder:text-left placeholder:underline-offset-auto placeholder:decoration-skip-ink-none placeholder:text-[#C1C1C1] focus:outline-none focus:ring-0"
            />
            <img src={swap} alt="" className="absolute -bottom-3 right-6 "/>
          </div>
          <div className="border-b border-[#EDEDED] py-[17px] px-[10px] flex items-center">
            <span className="font-montserrat text-[14px] font-semibold leading-[17.07px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none text-[#777777]">
              To{" "}
            </span>
            <input
              type="text"
              placeholder="( airport, hotel, address )"
              class="px-1 w-full border-none font-montserrat text-[14px] font-medium placeholder:font-montserrat placeholder:text-[14px] placeholder:font-regular placeholder:leading-[17.07px] placeholder:tracking-[0.02em] placeholder:text-left placeholder:underline-offset-auto placeholder:decoration-skip-ink-none placeholder:text-[#C1C1C1] focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex gap-6">
            <div className="border-b border-[#EDEDED] py-[17px] px-[10px] flex items-center w-1/2">
              <img src={Calander} alt="" />
              <input
                type="text"
                placeholder="Pickup Date"
                class="px-4 w-full border-none font-montserrat text-[14px] font-medium placeholder:font-montserrat placeholder:text-[14px] placeholder:font-regular placeholder:leading-[17.07px] placeholder:tracking-[0.02em] placeholder:text-left placeholder:underline-offset-auto placeholder:decoration-skip-ink-none placeholder:text-[#C1C1C1] focus:outline-none focus:ring-0"
              />
            </div>
            <div className="border-b border-[#EDEDED] py-[17px] px-[10px] flex items-center w-1/2">
              <img src={Calander} alt="" />
              <input
                type="text"
                placeholder="Pickup Time"
                class="px-4 w-full border-none font-montserrat text-[14px] font-medium placeholder:font-montserrat placeholder:text-[14px] placeholder:font-regular placeholder:leading-[17.07px] placeholder:tracking-[0.02em] placeholder:text-left placeholder:underline-offset-auto placeholder:decoration-skip-ink-none placeholder:text-[#C1C1C1] focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="border-b border-[#EDEDED] py-[17px] px-[10px] flex items-center ">
            <img src={passenger} alt="" />
            <input
              type="text"
              placeholder="Add Passenger & Baggage "
              class="px-4 w-full border-none font-montserrat text-[14px] font-medium placeholder:font-montserrat placeholder:text-[14px] placeholder:font-regular placeholder:leading-[17.07px] placeholder:tracking-[0.02em] placeholder:text-left placeholder:underline-offset-auto placeholder:decoration-skip-ink-none placeholder:text-[#C1C1C1] focus:outline-none focus:ring-0"
            />
            <img src={Vector} alt="" />
          </div>
          <div className="border-b border-[#EDEDED] py-[17px] px-[10px] flex items-center ">
            <img src={eml} alt="" />
            <input
              type="text"
              placeholder="Email "
              class="px-4 w-full border-none font-montserrat text-[14px] font-medium placeholder:font-montserrat placeholder:text-[14px] placeholder:font-regular placeholder:leading-[17.07px] placeholder:tracking-[0.02em] placeholder:text-left placeholder:underline-offset-auto placeholder:decoration-skip-ink-none placeholder:text-[#C1C1C1] focus:outline-none focus:ring-0"
            />
          </div>
          <div className="border-b border-[#EDEDED] py-[17px] px-[10px] flex items-center ">
            <img src={flagin} alt="" />
            <img src={smallvector} alt="" className="ml-2" />
            <input
              type="text"
              placeholder="Phone Number "
              class="px-4 w-full border-none font-montserrat text-[14px] font-medium placeholder:font-montserrat placeholder:text-[14px] placeholder:font-regular placeholder:leading-[17.07px] placeholder:tracking-[0.02em] placeholder:text-left placeholder:underline-offset-auto placeholder:decoration-skip-ink-none placeholder:text-[#C1C1C1] focus:outline-none focus:ring-0"
            />
          </div>
          <div>
            <label class="py-[17px] px-[10px] flex items-center">
              <input type="checkbox" className="h-[13px] w-[13px]" />
              <span class="font-montserrat text-[12px] ml-2 font-medium leading-[14.63px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none text-primblack">
                Additional requirements
              </span>
            </label>
          </div>
        </div>
        <button className="rounded-[6px] w-full sm:w-[422px] mx-auto h-[46px] bg-primary flex items-center justify-center font-lato text-[18px] font-bold leading-[21.6px] tracking-[0.02em] text-center underline-offset-auto decoration-skip-ink-none text-white ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
