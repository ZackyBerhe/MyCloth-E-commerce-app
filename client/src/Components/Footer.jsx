import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 text-gray-50 w-full py-6 px-20">
        {/* Links and Texts */}
        <div className="flex justify-between items-start w-full">
          {/* categories Links  */}
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-gray-100">Categories</p>
            <Link className="text-sm">Women</Link>
            <Link className="text-sm">Men</Link>
            <Link className="text-sm">Children</Link>
            <Link className="text-sm">Accessories</Link>
            <Link className="text-sm">New Arrivals</Link>
          </div>
          {/* Fast Access Links  */}
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-gray-100">Links</p>
            <Link className="text-sm">FAQ</Link>
            <Link className="text-sm">Pages</Link>
            <Link className="text-sm">Stores</Link>
            <Link className="text-sm">Compare</Link>
            <Link className="text-sm">Cookies</Link>
          </div>
          {/* About us Section  */}
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-gray-100">About</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit, sed do eiusmod tempor incididunt ut labore
              <br /> et dolore magna aliqua. Ut enim ad minim veniam,
              <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex
            </p>
          </div>
          {/* Contact us Section  */}
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-gray-100">Contact</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit, sed do eiusmod tempor incididunt ut labore
              <br /> et dolore magna aliqua. Ut enim ad minim veniam,
              <br /> quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex
            </p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <Link to="/" className="text-xl font-semibold text-yellow-500">
            MYCLOTH
          </Link>
          <p className="text-xs ">© Copyright 2023, All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
