import React, { useState } from "react";
import { FaHandshake } from "react-icons/fa";
import { MdChargingStation } from "react-icons/md";
import { GiWaterBottle } from "react-icons/gi";

const OfferAnc = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const offserv = [
    { tit: "Porter Service", icons: <FaHandshake /> },
    { tit: "Wifi", icons: <FaHandshake /> },
    { tit: "Child Seat", icons: <FaHandshake /> },
    { tit: "Wheel Chair", icons: <MdChargingStation /> },
    { tit: "Meet & greet", icons: <FaHandshake /> },
    { tit: "Bottled Water", icons: <GiWaterBottle /> },
    { tit: "Phone Charger", icons: <MdChargingStation /> },
  ];

  const handleSelect = (tit) => {
    if (selectedItems.includes(tit)) {
      setSelectedItems(selectedItems.filter((item) => item !== tit)); // Deselect item
    } else {
      setSelectedItems([...selectedItems, tit]); // Select item
    }
  };

  return (
    <div className="text-center">
      {/* Center the entire section */}
      <p className="text-[#161616] mt-6 font-lato text-[12px] font-bold leading-[15.6px] tracking-[0.04em] text-left underline-offset-[from-font] decoration-skip-ink-none">
        Offer Ancillary
      </p>
      <div className="flex flex-wrap gap-10 md:gap-12 xl:gap-16 mt-4">
        {/* Flexbox for layout */}
        {offserv.map((off) => (
          <div key={off.tit} className="flex flex-col items-center">
            {/* Center each item */}
            <div
              className={`md:h-24 md:w-24 h-16 w-16 flex items-center justify-center rounded-full border text-[2rem] mb-2 cursor-pointer 
                ${
                  selectedItems.includes(off.tit)
                    ? "border-[#FF8924] bg-[#FE604E24] text-[#FF8924]" // Apply selected styles
                    : "border-[#B9B9B9] text-[#B9B9B9]" // Default styles
                }`}
              onClick={() => handleSelect(off.tit)} // Toggle selection on click
            >
              {off.icons} {/* Render the icon */}
            </div>
            <p className="font-lato mt-1 text-primblack text-[10.5px] mb-6 font-semibold leading-[12.6px] text-left underline-offset-[from-font] decoration-skip-ink-none">
              {off.tit} {/* Render the title */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferAnc;
