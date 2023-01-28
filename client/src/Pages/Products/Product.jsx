import React from "react";
import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/12863063/pexels-photo-12863063.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/12862907/pexels-photo-12862907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <>
      <div className="flex w-full items-start gap-6 p-6">
        {/* other Images Area  */}

        <div className="flex flex-col w-[10rem] gap-4">
          <img
            onClick={(e) => setSelectedImage(0)}
            src={images[0]}
            alt=""
            className="w-full object-cover h-[8rem]"
          />
          <img
            onClick={(e) => setSelectedImage(1)}
            src={images[1]}
            alt=""
            className="w-full object-cover h-[8rem]"
          />
        </div>

        <div className="w-[40%] h-[80vh]">
          <img
            src={images[selectedImage]}
            alt=""
            className="w-full object-cover h-full"
          />
        </div>
        <div className="w-[40%] h-[80vh] flex flex-col items-start justify-center gap-6">
          <p className="text-gray-50 text-4xl font-medium">
            Long Sleeve Graphic T-Shirt
          </p>
          <p className="text-blue-500 text-4xl">$19.9</p>
          <p className="text-gray-50 text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </p>

          {/* order size  */}
          <div className="flex gap-2 items-center">
            <p
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
              className={
                quantity === 1
                  ? "bg-gray-50/50 px-3 py-1 text-lg font-medium cursor-not-allowed"
                  : `px-3 py-1 cursor-pointer bg-gray-50 text-lg font-medium`
              }
            >
              -
            </p>
            <p className="px-3 py-1 cursor-pointer text-gray-100 text-lg font-medium">
              {quantity}
            </p>
            <p
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1 cursor-pointer bg-gray-50 text-lg font-medium"
            >
              +
            </p>
          </div>

          {/* Add to cart Button */}
          <button className="bg-yellow-400 text-white px-6 py-2 flex gap-3 items-center hover:bg-yellow-500 transition-all duration-200 ease-in">
            <MdAddShoppingCart />
            <p className="font-medium text-sm">Add To Cart</p>
          </button>

          {/* Wish List */}
          <div className="flex gap-2 items-center text-white">
            <AiOutlineHeart className="text-2xl text-white" />
            <p className="font-light text-sm">Add To Watchlist</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
