import React from "react";
import Categories from "../../Components/Categories";
import Contact from "../../Components/Contact";
import FeaturedProducts from "../../Components/FeaturedProducts";
import Slider from "../../Components/Slider";

const Home = () => {
  return (
    <>
      <div className="">
        <Slider />
        <FeaturedProducts type="Featured Products" />
        <Categories />
        <FeaturedProducts type="Trending Products" />
        <Contact />
      </div>
    </>
  );
};

export default Home;
