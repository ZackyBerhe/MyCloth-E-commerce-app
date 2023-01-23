import React from "react";

const Product = () => {
  return (
    <>
      <div className="flex w-full items-start h-[88vh] pl-6 text-gray-50">
        {/* Filtering Section  */}
        <div className="flex flex-col h-full gap-6 w-[20rem] border-r-2 border-white/10">
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium text-gray-100">
              Product Category
            </p>

            <div className="flex gap-2">
              <input type="checkbox" name="hat" id="0" value={1} />
              <label htmlFor="hat">Women Hat</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="dress" id="1" value={2} />
              <label htmlFor="hat">Women Dress</label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium text-gray-100">
              Product Category
            </p>

            <div className="flex gap-2 w-full items-center">
              <span className="bg-N99 py-1 px-4 font-semibold rounded-sm text-xs flex items-center justify-center">
                0
              </span>
              <input
                type="range"
                min={0}
                max={20}
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer "
              />
              <span className="bg-N99 py-1 px-4 font-semibold rounded-sm text-xs flex items-center justify-center">
                20
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium text-gray-100">
              Product Category
            </p>

            <div className="flex gap-2">
              <input type="radio" name="price" id="0" value={1} />
              <label htmlFor="Price">Highest Price</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="price" id="1" value={2} />
              <label htmlFor="Price">Lowest Price</label>
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-col w-full h-full px-10">
          <img
            src="https://images.pexels.com/photos/1868474/pexels-photo-1868474.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Dude in a car"
            className="w-full h-[15rem] bg-green-300 object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Product;
