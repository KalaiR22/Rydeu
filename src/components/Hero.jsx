import React from 'react'
import BookNow from './BookNow';
import Minibus from './Minibus';
import Search from './Search';

const Hero = () => {
  return (
    <div className="bgImg ">
      <div className="bg-[#00000059] h-full w-full px-[25px] sm:px-[50px] lg:px-[73px] flex-col flex xl:flex-row justify-between items-center pt-[132px]">
        <div className=" ">
          <div className="text-white xl:pt-[132px]  md:w-[570px] ">
            <h1 className="font-roboto text-[25px] sm:text-[36px] font-black leading-[30px] sm:leading-[49.75px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
              Private Transfer & Taxi services in Geneva
            </h1>
            <p className="font-roboto text-[18px] sm:text-[24px] pt-7 font-medium leading-[34.61px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
              Book airport transfers, city transfers and hourly disposal
              services with driver
            </p>
          </div>
          <div className="hidden xl:flex  mt-[126px] gap-6">
            <Minibus />
            <BookNow />
          </div>
        </div>
        <div className=''>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Hero
