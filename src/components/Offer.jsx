import React, { useState } from "react";
import dashvector from "../assets/Images/dashvect.png";
import imp from '../assets/Images/imp.png'

const Offer = () => {
  const [paymentOption, setPaymentOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value) => {
    setPaymentOption(value);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div>
      <div>
        <p className="text-[#161616] py-6 font-lato text-[12px] font-extrabold leading-[15.6px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none">
          Offer Price
        </p>
      </div>
      <div className="flex">
        <div className="mr-16">
          <p className="font-lato ml-2 mb-3 text-[12px] font-normal leading-[15.6px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none text-[#161616]">
            Type of booking
          </p>

          {/* Custom Dropdown */}
          <div className="relative">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="border p-2 rounded-[4px] h-[44px] ml-2 flex justify-between items-center w-[360px] bg-[#F3F3F3] border-[#E2E2E2] text-primblack font-lato text-sm font-extrabold leading-[16.9px] tracking-[0.04em] text-left cursor-pointer"
            >
              {paymentOption ? paymentOption : "Select Payment Method"}{" "}
              <img src={dashvector} alt="" className="h-fit w-fit" />
            </div>

            {/* Dropdown menu */}
            {isOpen && (
              <ul className="absolute ml-2 bg-white border border-[#E2E2E2] rounded-[4px] w-[360px] mt-0 max-h-[200px] overflow-auto z-10 shadow-[0px_2px_4px_0px_#0000001F]">
                <li
                  onClick={() => handleChange("Pre-Payment")}
                  className="p-2 text-[13px] font-medium leading-[16.9px] tracking-[0.04em] cursor-pointer hover:bg-[#f3f3f3] py-4 flex items-center "
                >
                  Pre-Payment{" "}
                  <span className="font-lato text-[11px] font-medium leading-[15.6px] tracking-[0.04em] text-left  decoration-skip-none text-[#A0A0A0] ml-1">
                    (Full amount paid on the website)
                  </span>
                </li>
                <li
                  onClick={() => handleChange("Payment on Pickup")}
                  className="p-2 py-4 text-[13px] font-medium leading-[16.9px] tracking-[0.04em] cursor-pointer hover:bg-[#f3f3f3]"
                >
                  Payment on Pickup{" "}
                  <span className="font-lato text-[11px] font-medium leading-[15.6px] tracking-[0.04em] text-left  decoration-skip-none text-[#A0A0A0] ml-1">
                    (Reservation amount paid on website)
                  </span>{" "}
                </li>
                <li
                  onClick={() => handleChange("Both")}
                  className="p-2 py-4 text-[13px] font-medium leading-[16.9px] tracking-[0.04em] cursor-pointer hover:bg-[#f3f3f3]"
                >
                  Both
                </li>
              </ul>
            )}
          </div>

          <div className="w-[360px] flex gap-2 mt-4 ml-2">
            <div className="w-1/2">
              <p className="font-lato  mb-2 text-[12px] font-normal leading-[15.6px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none text-[#161616]">
                One Way
              </p>
              <input
                type="text"
                className="focus:outline-none focus:ring-0 border border-[#E2E2E2]  bg-[#F7F7F7] rounded-[4px]  h-[44px]"
              />
            </div>
            <div className="w-1/2">
              <p className="font-lato  mb-2 text-[12px] font-normal leading-[15.6px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none text-[#161616]">
                Return
              </p>
              <input
                type="text"
                className="focus:outline-none focus:ring-0 border border-[#E2E2E2]  bg-[#F7F7F7] rounded-[4px]  h-[44px]"
              />
            </div>
          </div>

          <p className="text-[#161616] mt-8 font-lato text-[12px] font-extrabold leading-[15.6px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
            Offer Available untill <span className="ml-4">10th May, 19:00</span>
          </p>
        </div>
        <div className="h-[180px] border border-[#EFEFEF]"></div>
        <div className="flex justify-evenly w-full">
          <div>
            <p className="text-[#161616]  font-lato text-[12px] font-extrabold leading-[15.6px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none">
              Pre-Payment
            </p>
            <div className="w-[287px] bg-[#ECF4FC] rounded-[4px] p-4 my-4">
              <div className="flex justify-between">
                <p className="font-roboto text-[12px] text-[#161616] font-normal leading-[15.6px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  You Get
                </p>
                <p className="font-roboto text-primblack text-[16px] font-semibold leading-[20.8px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  € 425
                </p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="font-roboto text-[12px] text-[#161616] font-normal leading-[15.6px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  Rydeu Commission 15%
                </p>
                <p className="font-roboto text-[16px] text-primblack font-semibold leading-[20.8px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  € 75
                </p>
              </div>
              <div className="border border-[#E0E3E8] my-4"></div>
              <div className="flex justify-between">
                <p className="text-[#161616] font-roboto text-[12px] font-bold leading-[15.6px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  Total Offer Price
                </p>
                <p className="text-[#33B20C] font-lato text-[18px] font-bold leading-[23.4px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  € 500
                </p>
              </div>
            </div>

            <div className="flex">
              <img src={imp} alt="" className="h-fit w-fit " />
              <p className="text-[#726F6F] font-roboto text-[12px] w-[261px] ml-2 font-normal leading-[17.04px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                Customer pays the full amount on the website while booking.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#161616]  font-lato text-[12px] font-extrabold leading-[15.6px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none">
              Payment on Pickup
            </p>
            <div className="w-[287px] bg-[#ECF4FC] rounded-[4px] p-4 my-4">
              <div className="flex justify-between">
                <p className="font-roboto text-[12px] text-[#161616] font-normal leading-[15.6px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  You Get
                </p>
                <p className="font-roboto text-primblack text-[16px] font-semibold leading-[20.8px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  € 400
                </p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="font-roboto text-[12px] text-[#161616] font-normal leading-[15.6px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  Rydeu Commission 15%
                </p>
                <p className="font-roboto text-[16px] text-primblack font-semibold leading-[20.8px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  € 100
                </p>
              </div>
              <div className="border border-[#E0E3E8] my-4"></div>
              <div className="flex justify-between">
                <p className="text-[#161616] font-roboto text-[12px] font-bold leading-[15.6px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  Total Offer Price
                </p>
                <p className="text-[#33B20C] font-lato text-[18px] font-bold leading-[23.4px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                  € 500
                </p>
              </div>
            </div>

            <div className="flex">
              <img src={imp} alt="" className="h-fit w-fit " />
              <p className="text-[#726F6F] font-roboto text-[12px] w-[261px] ml-2 font-normal leading-[17.04px] tracking-[0.04em] text-left underline-offset-auto decoration-skip-ink-none">
                Customer pays only the commission amount on the website to
                reserve the booking. Balance amount is paid to the driver during
                pickup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
