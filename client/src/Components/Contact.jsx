import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import { FiTwitter } from "react-icons/fi";
import { RiGoogleLine, RiFacebookCircleLine } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <div className="w-full flex bg-yellow-400/10 p-6 justify-evenly items-center gap-20">
        <p className="text-white text-lg font-medium">Be In Touch With Us:</p>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="p-1 px-4 text-sm w-[15rem]"
          />
          <input
            type="button"
            value="Join Us"
            className="text-white text-sm bg-slate-700 p-1 px-4"
          />
        </div>

        <div className="flex gap-4 items-center">
          <RiFacebookCircleLine className="text-white text-xl" />
          <AiOutlineInstagram className="text-white text-xl" />
          <FiTwitter className="text-white text-xl" />
          <RiGoogleLine className="text-white text-xl" />
          <ImPinterest2 className="text-white text-xl" />
        </div>
      </div>
    </>
  );
};

export default Contact;
