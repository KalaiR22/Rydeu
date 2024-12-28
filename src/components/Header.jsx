import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoheader from "../assets/Images/logoheader.png";
import helpHeader from "../assets/Images/helpHeader.png";
import flagheader from "../assets/Images/flagheader.png";
import profileHead from "../assets/Images/profileHead.png";
import toggleHead from "../assets/Images/toggleHead.png";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full top-0 z-50">
      <div className="flex justify-between items-center h-[66px] px-[15px] md:px-[20px] lg:px-[58px] bg-white w-full">
        {/* Logo and Navigation */}
        <div className="flex gap-10 lg:gap-20 items-center">
          <img src={logoheader} alt="Logo" className="w-[80px] h-[25px] sm:w-[115px] sm:h-[36px]" />
          <div className="hidden md:flex gap-12 items-center text-secblack">
            <Link to="/">
              <p
                className={`font-roboto text-[14px] leading-[16.41px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none ${
                  location.pathname === "/" ? "font-bold" : "font-normal"
                }`}
              >
                Transfers
              </p>
            </Link>
            <p
              className={`font-roboto text-[14px] leading-[16.41px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none font-normal`}
            >
              Bus Hire
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-secblack gap-12">
          <Link to="/help">
            <div className="flex gap-2 items-center">
              <img
                src={helpHeader}
                alt="Help Icon"
                className="h-[18px] w-[18px]"
              />
              <p
                className={`font-roboto text-[13px] leading-[15.23px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none ${
                  location.pathname === "/help" ? "font-bold" : "font-normal"
                }`}
              >
                Help
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <img
              src={flagheader}
              alt="Flag"
              className="h-[14.5px] w-[22.11px]"
            />
            <div className="flex items-center gap-2">
              <p className="font-roboto text-[13px] font-normal leading-[15.23px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none">
                Deutsch
              </p>
              <p className="flex mb-[2px] text-xs text-secblack font-thin">|</p>
              <p className="items-center flex font-roboto text-[13px] font-normal leading-[15.23px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none">
                EUR
              </p>
            </div>
          </div>
          <Link to="/dashboard">
            <div className="flex w-[82px] h-[35px] border border-solid border-primarygrey items-center rounded-full justify-center gap-3">
              <img
                src={profileHead}
                alt="Profile"
                className="bg-[#A0A0A0] rounded-full h-[24px] w-[24px] pb-[3px] px-1 pt-1"
              />
              <img
                src={toggleHead}
                alt="Toggle"
                className="h-[22px] w-[22px]"
              />
            </div>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-secblack focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform ${
                menuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link to="/">
              <p
                className={`font-roboto text-[14px] leading-[16.41px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none ${
                  location.pathname === "/" ? "font-bold" : "font-normal"
                }`}
              >
                Transfers
              </p>
            </Link>
            <p
              className={`font-roboto text-[14px] leading-[16.41px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none font-normal`}
            >
              Bus Hire
            </p>
            <Link to="/help">
              <div className="flex gap-2 items-center">
                <img
                  src={helpHeader}
                  alt="Help Icon"
                  className="h-[18px] w-[18px]"
                />
                <p
                  className={`font-roboto text-[13px] leading-[15.23px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none ${
                    location.pathname === "/help" ? "font-bold" : "font-normal"
                  }`}
                >
                  Help
                </p>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <img
                src={flagheader}
                alt="Flag"
                className="h-[14.5px] w-[22.11px]"
              />
              <div className="flex items-center gap-2">
                <p className="font-roboto text-[13px] font-normal leading-[15.23px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none">
                  Deutsch
                </p>
                <p className="flex mb-[2px] text-xs text-secblack font-thin">
                  |
                </p>
                <p className="items-center flex font-roboto text-[13px] font-normal leading-[15.23px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none">
                  EUR
                </p>
              </div>
            </div>
            <Link to="/dashboard">
              <div className="flex w-[82px] h-[35px] border border-solid border-primarygrey items-center rounded-full justify-center gap-3">
                <img
                  src={profileHead}
                  alt="Profile"
                  className="bg-[#A0A0A0] rounded-full h-[24px] w-[24px] pb-[3px] px-1 pt-1"
                />
                <img
                  src={toggleHead}
                  alt="Toggle"
                  className="h-[22px] w-[22px]"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
