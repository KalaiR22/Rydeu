import React from 'react'
import { cities } from '../constants';

const OtherCities = () => {
  return (
    <div className="px-[58px] py-10">
      <p className="font-lato text-[28px] mb-8 text-primblack font-black leading-[33.6px] tracking-[0.04em]  underline-offset-auto decoration-skip-ink-none">
        Other cities{" "}
      </p>
      <div className="flex flex-wrap px-4 gap-8 items-center justify-center">
        {cities.map((city) => (
          <div key={city.title}>
            <div
              className={`w-[272.48px] h-[151.78px] flex  items-center justify-center`}
              style={{ backgroundImage: `url(${city.image})` }}
            >
              <h1 className="font-lato text-[24px] font-medium leading-[28.8px] tracking-[0.04em] text-white text-center underline-offset-auto decoration-skip-ink-none">
                {city.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherCities
