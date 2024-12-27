import React from 'react'
import rightarrow from '../assets/Images/rightarrow.png'

const BookNow = () => {
  return (
    <div className="bgbook shadow-[3px_4px_6px_0px_#0000001F] ">
      <div className='w-[161px] float-right pt-5 mr-8'>
        <h1 className="font-roboto uppercase text-[18px] font-black leading-[26.44px] text-left underline-offset-auto decoration-skip-ink-none text-primary">
          Book & Pay Later{" "}
        </h1>
        <p className="text-[ #073A4D] font-roboto text-[11px] font-bold leading-[17.6px] tracking-[0.06em] text-left underline-offset-auto decoration-skip-ink-none">
          Book your ride now and pay only on arrival{" "}
        </p>
        <button className="flex items-center mt-3 justify-center float-right w-[111px] h-[27px] bg-white text-primary border-primary border rounded-full font-lato text-[12px] font-bold leading-[18.78px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none">
          {" "}
          Book Now
          <img src={rightarrow} alt="" className="w-fit h-fit ml-4" />
        </button>
      </div>
    </div>
  );
}

export default BookNow
