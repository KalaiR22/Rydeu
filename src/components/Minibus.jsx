import React from 'react'
import rightarrow from "../assets/Images/rightarrow.png";


const Minibus = () => {
  return (
    <div className="bgmini shadow-[3px_4px_6px_0px_#0000001F] ">
      <div className="w-[118px] float-right pt-6 mr-8">
        <h1 className="font-montserrat float-right text-[15px] font-medium leading-[23.48px] tracking-[0.02em]  underline-offset-auto decoration-skip-ink-none">
          Hire <span className="text-[15px] font-bold">MiniBus</span> &{" "}
          <span className="text-[15px] font-bold">Coach/Bus</span>
        </h1>
        <button className="flex items-center mt-5 justify-center float-right w-[111px] h-[27px] bg-white text-primary border-primary border rounded-full font-lato text-[12px] font-bold leading-[18.78px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none">
          {" "}
          Book Now
          <img src={rightarrow} alt="" className="w-fit h-fit ml-4" />
        </button>
      </div>
    </div>
  );
}

export default Minibus
