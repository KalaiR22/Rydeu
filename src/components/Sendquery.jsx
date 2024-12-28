import React from 'react'

const Sendquery = () => {
  return (
    <div className="w-[617px] flex-col items-center justify-center mx-auto  mt-9">
      <div className="flex justify-between mb-6">
        <div>
          <p className="font-lato text-xs font-normal leading-[14.4px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none text-primblack">
            Name
          </p>
          <input
            type="text"
            className="focus:outline-none focus:ring-0 border border-[#E2E2E2] mt-1 bg-[#F7F7F7] rounded-[4px] w-[294px] h-[32px]"
          />
        </div>
        <div>
          <p className="font-lato text-xs font-normal leading-[14.4px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none text-primblack">
            Email
          </p>
          <input
            type="email"
            className="focus:outline-none focus:ring-0 border border-[#E2E2E2] mt-1 bg-[#F7F7F7] rounded-[4px] w-[294px] h-[32px]"
          />
        </div>
      </div>
      <div className="flex justify-between mb-6">
        <div>
          <p className="font-lato text-xs font-normal leading-[14.4px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none text-primblack">
            Subject
          </p>
          <input
            type="text"
            className="focus:outline-none focus:ring-0 border border-[#E2E2E2] mt-1 bg-[#F7F7F7] rounded-[4px] w-[294px] h-[32px]"
          />
        </div>
        <div>
          <p className="font-lato text-xs font-normal leading-[14.4px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none text-primblack">
            Order no.
          </p>
          <input
            type="text"
            className="focus:outline-none focus:ring-0 border border-[#E2E2E2] mt-1 bg-[#F7F7F7] rounded-[4px] w-[294px] h-[32px]"
          />
        </div>
      </div>
      <div className='mb-7'>
        <p className="font-lato text-xs font-normal leading-[14.4px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none text-primblack">
          Your Query
        </p>
        <input
          type="text"
          className="focus:outline-none focus:ring-0 border border-[#E2E2E2] mt-1 bg-[#F7F7F7] rounded-[4px] w-full h-[72px]"
        />
      </div>
      <button className="rounded-[3px]  mx-auto h-[33px] w-[191px] bg-primary flex items-center justify-center font-montserrat text-[16px] font-bold leading-[24.88px] tracking-[0.02em] text-center underline-offset-auto decoration-skip-ink-none text-white ">
        Search
      </button>
    </div>
  );
}

export default Sendquery
