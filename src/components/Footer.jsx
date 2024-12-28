import React from 'react'
import footerlogo from '../assets/Images/footerlogo.png'
import { company, helpcenter, ourservice } from '../constants';

const Footer = () => {
  return (
    <div className="bg-black text-white mt-5">
      <div className="flex mx-[35px] md:mx-[54px] sm:justify-between flex-row flex-wrap gap-10 text-left py-16 border-b-[0.1px] border-[#efefef39]">
        <div className="flex-col items-center sm:mx-auto">
          <div>
            <img src={footerlogo} alt="" className="w-[121px] h-[39px]" />
            <p className="font-roboto text-[13px] mt-2 font-normal leading-[15.23px] tracking-[0.04em] text-left  underline-offset-[from-font] decoration-skip-ink-none text-white">
              Solution for all ground transfers
            </p>
          </div>
          <p className="font-lato mt-10 text-[12px] font-bold leading-[14.4px] tracking-[0.07em] text-left  underline-offset-[from-font] decoration-skip-ink-none">
            Connect with us
          </p>
        </div>
        <div className="flex-col items-center sm:mx-auto">
          <h1 className="font-lato text-[14px] font-bold leading-[16.8px] tracking-[0.07em] text-left  underline-offset-[from-font] decoration-skip-ink-none">
            COMPANY
          </h1>
          <div className="mt-4">
            {company.map((com) => (
              <div
                key={com.title}
                className="text-lightwhite font-lato text-[13px] font-light leading-[31.2px] tracking-[0.04em] text-left  underline-offset-[from-font] decoration-skip-ink-none"
              >
                {com.title}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-col items-center sm:mx-auto">
          <h1 className="font-lato text-[14px] font-bold leading-[16.8px] tracking-[0.07em] text-left  underline-offset-[from-font] decoration-skip-ink-none">
            HELP CENTER
          </h1>
          <div className="mt-4">
            {helpcenter.map((com) => (
              <div
                key={com.title}
                className="text-lightwhite font-lato text-[13px] font-light leading-[31.2px] tracking-[0.04em] text-left  underline-offset-[from-font] decoration-skip-ink-none"
              >
                {com.title}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-col items-center sm:mx-auto">
          <h1 className="font-lato text-[14px] font-bold leading-[16.8px] tracking-[0.07em] text-left  underline-offset-[from-font] decoration-skip-ink-none">
            OUR SERVICES
          </h1>
          <div className="mt-4">
            {ourservice.map((com) => (
              <div
                key={com.title}
                className="text-lightwhite font-lato text-[13px] font-light leading-[31.2px] tracking-[0.04em] text-left  underline-offset-[from-font] decoration-skip-ink-none"
              >
                {com.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className=" text-lightwhite py-10 text-center font-lato text-[14px] font-light leading-[16.8px] tracking-[0.04em] underline-offset-[from-font] decoration-skip-ink-none">
        Copyright &copy; 2020 rydeu.com All rights reserved.
      </p>
    </div>
  );
}

export default Footer
