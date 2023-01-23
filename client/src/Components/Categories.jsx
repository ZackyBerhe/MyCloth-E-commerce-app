import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/14984375/pexels-photo-14984375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/14984388/pexels-photo-14984388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "2021/2022 Arsenal Home Kit",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/14984375/pexels-photo-14984375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/14984388/pexels-photo-14984388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "2021/2022 Arsenal Home Kit",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/14984375/pexels-photo-14984375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/14984388/pexels-photo-14984388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "2021/2022 Arsenal Home Kit",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/14984375/pexels-photo-14984375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/14984388/pexels-photo-14984388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "2021/2022 Arsenal Home Kit",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <>
      <div className="flex items-center w-full h-[90vh]">
        <div className="flex flex-col w-[25%] h-full">
          {/* small div one  */}
          <Link
            to="/products/1"
            className="text-center group relative w-full h-1/2  "
          >
            <img
              src={data[0].img}
              alt="Women In An Arsenal Shirt"
              className=" group-hover:hidden h-full w-full object-cover"
            />
            <div className="h-full w-full group-hover:opacity-100 group-hover:visible opacity-0 invisible flex bg-white absolute top-0 left-0 transition-all duration-300 ease-in justify-center items-center">
              <p className="text-yellow-500 text-xl font-medium">Women</p>
            </div>
          </Link>
          {/* small second div  */}
          <Link to="/products/1" className="text-center group relative h-1/2">
            <img
              src={data[0].img}
              alt="Women In An Arsenal Shirt"
              className=" group-hover:hidden h-full w-full object-cover"
            />
            <div className="h-full w-full group-hover:opacity-100 group-hover:visible opacity-0 invisible flex bg-white absolute top-0 left-0 transition-all duration-300 ease-in justify-center items-center">
              <p className="text-yellow-500 text-xl font-medium">Women</p>
            </div>
          </Link>
        </div>

        {/* Long div */}
        <Link
          to="/products/1"
          className="text-center group relative h-full w-[25%]"
        >
          <img
            src={data[0].img}
            alt="Women In An Arsenal Shirt"
            className=" group-hover:hidden h-full w-full object-cover"
          />
          <div className="h-full w-full group-hover:opacity-100 group-hover:visible opacity-0 invisible flex bg-white absolute top-0 left-0 transition-all duration-300 ease-in justify-center items-center">
            <p className="text-yellow-500 text-xl font-medium">Women</p>
          </div>
        </Link>
        <div className="flex flex-col w-[50%] h-full">
          <div className="flex w-full h-1/2">
            {/* small third div  */}
            <Link to="/products/1" className="text-center group relative w-1/2">
              <img
                src={data[0].img}
                alt="Women In An Arsenal Shirt"
                className=" group-hover:hidden h-full w-full object-cover"
              />
              <div className="h-full w-full group-hover:opacity-100 group-hover:visible opacity-0 invisible flex bg-white absolute top-0 left-0 transition-all duration-300 ease-in justify-center items-center">
                <p className="text-yellow-500 text-xl font-medium">Women</p>
              </div>
            </Link>

            {/* small fourth div  */}
            <Link to="/products/1" className="text-center group relative w-1/2">
              <img
                src={data[0].img}
                alt="Women In An Arsenal Shirt"
                className=" group-hover:hidden h-full w-full object-cover"
              />
              <div className="h-full w-full group-hover:opacity-100 group-hover:visible opacity-0 invisible flex bg-white absolute top-0 left-0 transition-all duration-300 ease-in justify-center items-center">
                <p className="text-yellow-500 text-xl font-medium">Women</p>
              </div>
            </Link>
          </div>

          {/* Wide div */}
          <Link
            to="/products/1"
            className="text-center group relative h-1/2 w-full"
          >
            <img
              src={data[0].img}
              alt="Women In An Arsenal Shirt"
              className=" group-hover:hidden h-full w-full object-cover"
            />
            <div className="h-full w-full group-hover:opacity-100 group-hover:visible opacity-0 invisible flex bg-white absolute top-0 left-0 transition-all duration-300 ease-in justify-center items-center">
              <p className="text-yellow-500 text-xl font-medium">Women</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Categories;
