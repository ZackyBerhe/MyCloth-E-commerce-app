import React from "react";

const FeaturedProducts = ({ type }) => {
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
      <div className="w-full flex flex-col gap-8 py-6 px-32">
        {/* Heading Title and Description  */}
        <div className="w-full flex py-2 justify-between items-center">
          <p className="text-2xl text-gray-100 font-semibold">{type}</p>
          <p className="text-xs text-green-50 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ornare dui in odio luctus feugiat. Fusce at posuere libero, <br />
            ornare dignissim velit. Maecenas ac mauris molestie, porttitor purus
            eget, tempus odio. Mauris mauris tellus, suscipit vitae
            <br /> nulla vel, vulputate faucibus elit. Donec nibh turpis,
            suscipit non interdum non
          </p>
        </div>

        {/* items image section */}
        <div className="w-full grid grid-cols-4 gap-6 px-10 py-4">
          {data.map((item) => (
            <div className="relative flex flex-col items-start gap-2">
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
      </div>
    </>
  );
};

export default FeaturedProducts;
