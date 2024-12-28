import React, { useState } from "react";
import faq from "../assets/Images/faq.png";
import guide from "../assets/Images/guide.png";
import chat from "../assets/Images/chat.png";
import social from "../assets/Images/social.png";
import sendquery from "../assets/Images/sendquery.png";
import Vector from "../assets/Images/faqdown.png";
import Chat from "./Chat";
import Social from "./Social";
import Sendquery from "./Sendquery";

const HelpComp = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="-mt-28">
      <div className="flex items-center mx-auto justify-center gap-5 mb-12">
        <div className="w-[472px] flex rounded-[7px] shadow-[0px_5px_10px_0px_#0000001F] px-12 py-8 bg-white">
          <img src={faq} alt="" />
          <div className="ml-8">
            <h1 className="font-montserrat text-[16px] text-primblack font-bold leading-[19.5px] tracking-[0.02em] text-left underline-offset-[from-font] decoration-skip-ink-none">
              FAQ
            </h1>
            <p className="font-montserrat text-[16px] mt-4 text-[#A8A8A8] font-medium leading-[19.5px] text-left underline-offset-[from-font] decoration-skip-ink-none">
              Lorem ipsum doolor sit amet
            </p>
          </div>
        </div>
        <div className="w-[472px] flex rounded-[7px] shadow-[0px_5px_10px_0px_#0000001F] px-12 py-8 bg-white">
          <img src={guide} alt="" />
          <div className="ml-8">
            <h1 className="font-montserrat text-[16px] text-primblack font-bold leading-[19.5px] tracking-[0.02em] text-left underline-offset-[from-font] decoration-skip-ink-none">
              Travel Guide
            </h1>
            <p className="font-montserrat text-[16px] mt-4 text-[#A8A8A8] font-medium leading-[19.5px] text-left underline-offset-[from-font] decoration-skip-ink-none">
              Lorem ipsum doolor sit amet
            </p>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div
        className="w-[963px] mb-10 mx-auto rounded-[7px] shadow-[0px_5px_10px_0px_#0000001F] px-12 py-8 bg-white"
        onClick={() => toggleSection("chat")}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <img src={chat} alt="" className="h-fit w-fit" />
            <div className="ml-8">
              <h1 className="font-montserrat text-[16px] text-primblack font-bold leading-[19.5px] tracking-[0.02em] text-left underline-offset-[from-font] decoration-skip-ink-none">
                Chat
              </h1>
              <p className="font-montserrat text-[16px] mt-4 text-[#A8A8A8] font-medium leading-[19.5px] text-left underline-offset-[from-font] decoration-skip-ink-none">
                Lorem ipsum doolor sit amet
              </p>
            </div>
          </div>
          <img
            src={Vector}
            alt=""
            className={`h-fit w-fit transition-transform duration-300 ease-in-out ${
              activeSection === "chat" ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            activeSection === "chat"
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {activeSection === "chat" && <Chat />}
        </div>
      </div>

      {/* Social Section */}
      <div
        className="w-[963px] mb-10 mx-auto rounded-[7px] shadow-[0px_5px_10px_0px_#0000001F] px-12 py-8 bg-white"
        onClick={() => toggleSection("social")}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <img src={social} alt="" className="h-fit w-fit" />
            <div className="ml-8">
              <h1 className="font-montserrat text-[16px] text-primblack font-bold leading-[19.5px] tracking-[0.02em] text-left underline-offset-[from-font] decoration-skip-ink-none">
                Social
              </h1>
              <p className="font-montserrat text-[16px] mt-4 text-[#A8A8A8] font-medium leading-[19.5px] text-left underline-offset-[from-font] decoration-skip-ink-none">
                Lorem ipsum doolor sit amet
              </p>
            </div>
          </div>
          <img
            src={Vector}
            alt=""
            className={`h-fit w-fit transition-transform duration-300 ease-in-out ${
              activeSection === "social" ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            activeSection === "social"
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {activeSection === "social" && <Social />}
        </div>
      </div>

      {/* Send Query Section */}
      <div
        className="w-[963px] mb-10 mx-auto rounded-[7px] shadow-[0px_5px_10px_0px_#0000001F] px-12 py-8 bg-white"
        onClick={() => toggleSection("sendquery")}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <img src={sendquery} alt="" className="h-fit w-fit" />
            <div className="ml-8">
              <h1 className="font-montserrat text-[16px] text-primblack font-bold leading-[19.5px] tracking-[0.02em] text-left underline-offset-[from-font] decoration-skip-ink-none">
                Send Query
              </h1>
              <p className="font-montserrat text-[16px] mt-4 text-[#A8A8A8] font-medium leading-[19.5px] text-left underline-offset-[from-font] decoration-skip-ink-none">
                Lorem ipsum doolor sit amet
              </p>
            </div>
          </div>
          <img
            src={Vector}
            alt=""
            className={`h-fit w-fit transition-transform duration-300 ease-in-out ${
              activeSection === "sendquery" ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            activeSection === "sendquery"
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {activeSection === "sendquery" && <Sendquery />}
        </div>
      </div>
    </div>
  );
};

export default HelpComp;
