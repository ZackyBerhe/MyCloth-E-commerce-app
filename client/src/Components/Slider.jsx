import React from "react";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Slider = () => {
  const data = [
    "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1508853363419-a9263d752c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1506620195489-7839a134b1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];

  // state to handel slider
  const [slide, setSlide] = useState(0);

  //   functions

  const prevSlide = () => {
    setSlide(slide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setSlide(slide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <>
      <div className="custom relative w-full overflow-x-hidden">
        <div
          style={{ transform: `translateX(-${slide * 100}vw)` }}
          className={`-translate-x-[${
            slide * 100
          }vw] w-[300vw] h-full flex transition-all duration-1000 ease-in`}
        >
          <div className="w-[100vw]">
            <img
              src={data[0]}
              alt="First"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100vw]">
            <img
              src={data[1]}
              alt="Second"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100vw]">
            <img
              src={data[2]}
              alt="Third"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute w-full p-6 top-1/2 -translate-y-1/2 flex justify-between">
          <BsArrowLeft
            onClick={prevSlide}
            className="text-4xl bg-white/50 p-2 rounded-full hover:p-1.5 cursor-pointer"
          />
          <BsArrowRight
            onClick={nextSlide}
            className="text-4xl bg-white/50 p-2 rounded-full hover:p-1.5 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
