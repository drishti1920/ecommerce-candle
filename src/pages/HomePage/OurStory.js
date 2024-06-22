import React from "react";
import classes from "./Header.module.css";
import banner from "../../assessts/images/ourstory.jpg";

const OurStory = () => {
  return (
    <div className={`${classes.OurStoryWrapper}`}>
      <div className={`${classes.OurStoryContent}`}>
        <div className={`${classes.OurStory}`}>
          <h1>Discover Serenity</h1>

          <p>
            Born from a singular passion to create extraordinary candles, these
            treasures not only look stunning and smell divine but also serve as
            a gentle reminder to slow down, escape the mundane, and uncover the
            everyday magic around us.
            <br />
            As someone once wisely said, "Enjoy the little things, for one day
            you may look back and realize they were the big things."
          </p>
        </div>
        <div className={`${classes.OurStoryImageConatiner}`}>
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
