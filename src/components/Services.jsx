import React from 'react'
import { service } from '../constants'

const Services = () => {
  return (
    <div className="bg-[#EFEFEF] mt-52 flex w-full items-center px-10 pt-7 pb-6">
      {service.map((ser, index) => (
        <div
          key={ser.title}
          className={`flex flex-col items-center justify-center w-1/4 ${
            index !== service.length - 1
              ? "border-r border-[#9c9c9c56] "
              : ""
          }`}
        >
          <img src={ser.image} alt="" className="mx-auto" />
          <p className="font-roboto text-[14px] text-primblack mt-4 font-normal leading-[16.41px] tracking-[0.02em] text-left underline-offset-auto decoration-skip-ink-none">
            {ser.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Services
