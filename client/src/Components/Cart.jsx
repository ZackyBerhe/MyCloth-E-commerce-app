import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/14984375/pexels-photo-14984375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/14984388/pexels-photo-14984388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "2021/2022 Arsenal Home Kit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <>
      {data ? (
        <div className="flex flex-col gap-2 p-4 text-slate-800 shadow-xl bg-gray-100 absolute right-10 top-20">
          <p className="text-slate-500 text-xl">Products in your cart</p>

          <div className="flex gap-4 items-center">
            <img
              src={data[0].img}
              alt="black man t shirt"
              className="h-[6rem] w-[4rem] object-cover"
            />

            <div className="flex items-start flex-col gap-1 w-[230px]">
              <p className="">{data[0].title}</p>

              <p className=" text-[10px] font-light">
                {data[0].desc ? data[0].desc : ""}
              </p>

              <p className="text-blue-500">1 x ${data[0].price}</p>
            </div>

            <AiOutlineDelete className="text-2xl text-red-400" />
          </div>

          <div className="w-full flex justify-between items-center">
            <p className="font-medium">Subtotal</p>
            <p className="font-medium">$19.9</p>
          </div>

          <button className="bg-yellow-400 text-white px-6 py-2 hover:bg-yellow-500 transition-all duration-200 ease-in">
            <p className="font-medium text-sm">Priceed To Checkout</p>
          </button>

          <p className="text-sm text-red-400">Reset Cart</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
