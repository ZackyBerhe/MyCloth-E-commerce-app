import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronDown, BsPerson, BsCart2 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Cart from "../Components/Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      {cartOpen && <Cart />}
      <div className="flex w-full justify-between items-center p-6 font-medium text-gray-50 h-20">
        <div className="flex gap-6">
          <div className="flex gap-2 items-center">
            <p>ETB</p>
            <BsChevronDown className="text-2xl" />
          </div>

          <Link to="/products/1">Women</Link>
          <Link to="/products/2">Men</Link>
          <Link to="/products/3">Children</Link>
          <Link to="/products/3">Accessories</Link>
        </div>

        {/* Logo Place */}
        <Link to="/" className="text-xl font-semibold text-yellow-500">
          MYCLOTH
        </Link>

        {/* Other Links */}
        <div className="flex gap-6 items-center">
          <div>
            <Link to="">Home</Link>
          </div>
          <div>
            <Link to="">About</Link>
          </div>
          <div>
            <Link to="">Contact</Link>
          </div>
          <div>
            <Link to="">Stores</Link>
          </div>

          {/* icons  */}
          <div className="flex gap-3 items-center">
            <BiSearch className="text-2xl" />
            <BsPerson className="text-2xl" />
            <AiOutlineHeart className="text-2xl" />
            <div
              onClick={() => setCartOpen((prev) => !prev)}
              className="relative cursor-pointer"
            >
              <BsCart2 className="text-2xl" />
              <span className="p-1 text-[12px] flex items-center justify-center bg-blue-500 rounded-full text-white font-medium h-4 w-4 absolute -right-1 -top-1">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
