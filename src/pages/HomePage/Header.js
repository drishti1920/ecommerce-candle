import React from "react";
import Slider from "../../components/slider/Slider";
import Brand from "./Brand";
import BestSeller from "./BestSeller";
import OurStory from "./OurStory";

const Header = () => {
  return (
    <>
      <Slider />
      <Brand />
      <BestSeller />
      <OurStory/>
    </>
  );
};

export default Header;
