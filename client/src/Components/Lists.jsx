import React from "react";

const Lists = () => {
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
      {/* items image section */}
      <div className="w-full grid grid-cols-4 gap-6 py-4">
        {data?.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-start gap-2"
          >
            <div className="w-[15rem] h-[22.5rem] group">
              <img
                src={item.img}
                alt="products"
                className="group-hover:hidden"
              />
              <img
                src={item.img2}
                alt="products"
                className="hidden group-hover:block"
              />
            </div>
            <p className="text-gray-100 font-medium text-sm">{item.title}</p>
            <div className="flex gap-4">
              <p className="text-gray-500 text-lg line-through">
                ${item.oldPrice}
              </p>
              <p className="text-gray-100 text-lg">${item.price}</p>
            </div>
            <p className="absolute top-2 left-2 bg-white px-3 py-0.5 flex justify-center items-center text-blue-500 text-sm font-medium rounded">
              New Season
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Lists;
