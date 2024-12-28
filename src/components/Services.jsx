import React from 'react'
import { service } from '../constants'
import Minibus from './Minibus';
import BookNow from './BookNow';

const Services = () => {
  return (
    <div className="mt-[30rem] xl:mt-0">
      <div className="flex flex-col md:flex-row xl:hidden  mt-[126px] gap-6 items-center justify-center">
        <Minibus />
        <BookNow />
      </div>
      <div className="bg-[#EFEFEF] xl:mt-52 flex flex-wrap sm:flex-row w-full items-center px-4 md:pt-7  lg:px-10 pb-6 mt-20">
        {service.map((ser, index) => (
          <div
            key={ser.title}
            className={`flex flex-col items-center justify-center pt-7 md:pt-0 w-1/2 md:w-1/4 ${
              index !== service.length - 1
                ? "md:border-r md:border-[#9c9c9c56]"
                : ""
            }`}
          >
            <img
              src={ser.image}
              alt=""
              className="mx-auto md:h-fit md:w-fit h-5 w-5"
            />
            <p className="font-roboto text-[10px] md:text-[11px] lg:text-[14px] text-primblack mt-4 font-normal leading-[16.41px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none">
              {ser.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services
