import React from "react";
import logoheader from "../assets/Images/logoheader.png";
import helpHeader from "../assets/Images/helpHeader.png";
import flagheader from "../assets/Images/flagheader.png";
import profileHead from "../assets/Images/profileHead.png";
import toggleHead from "../assets/Images/toggleHead.png";
const Header = () => {
  return (
    <div className="fixed w-full top-0 z-50">
      <div className="flex justify-between items-center h-[66px] px-[58px] bg-white w-full">
        <div className="flex gap-20 items-center">
          <img src={logoheader} alt="" className="w-[115px] h-[36px]" />
          <div className="flex gap-12 items-center text-secblack">
            <p className="font-roboto text-[14px] font-bold leading-[16.41px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none  ">
              Transfers
            </p>
            <p className="font-roboto text-[14px] font-normal leading-[16.41px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none ">
              Bus Hire
            </p>
          </div>
        </div>
        <div className="flex items-center text-secblack gap-12">
          <div className="flex gap-2 items-center">
            <img src={helpHeader} alt="" className="h-[18px] w-[18px]" />
            <p className="font-roboto text-[13px] font-normal leading-[15.23px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none">
              Help
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src={flagheader} alt="" className="h-[14.5px] w-[22.11px]" />
            <div className="flex items-center gap-2">
              <p className="font-roboto text-[13px] font-normal leading-[15.23px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none">
                Deutsch
              </p>
              <p className=" flex mb-[2px] text-xs text-secblack font-thin ">
                |
              </p>
              <p className="items-center flex font-roboto text-[13px] font-normal leading-[15.23px] tracking-custom text-left underline-offset-auto decoration-skip-ink-none">
                EUR
              </p>
            </div>
          </div>
          <div className="flex w-[82px] h-[35px]   border  border-solid border-primarygrey items-center rounded-full justify-center gap-3">
            <img
              src={profileHead}
              alt=""
              className="bg-[#A0A0A0] rounded-full h-[24px] w-[24px] pb-[3px] px-1 pt-1"
            />
            <img src={toggleHead} alt="" className="h-[22px] w-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
