import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Lists from "../../Components/Lists";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <>
      <div className="flex w-full items-start pb-10 pl-6 text-gray-50">
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
            <p className="text-xl font-medium text-gray-100">Product Price</p>

            <div className="flex gap-2 w-full items-center">
              <span className="bg-N99 py-1 px-4 font-semibold rounded-sm text-xs flex items-center justify-center">
                0
              </span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer "
              />
              <span className="bg-N99 py-1 px-4 font-semibold rounded-sm text-xs flex items-center justify-center">
                {maxPrice}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium text-gray-100">
              Product Category
            </p>

            <div className="flex gap-2">
              <input
                type="radio"
                name="price"
                id="0"
                value="desc"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="Price">Highest Price</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="price"
                id="1"
                value="asc"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="Price">Lowest Price</label>
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-col w-full h-full px-10">
          <img
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Dude in a car"
            className="w-full h-[15rem] bg-green-300 object-cover"
          />

          <Lists catId={catId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </>
  );
};

export default Products;
