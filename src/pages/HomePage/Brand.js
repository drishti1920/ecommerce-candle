import React from "react";
import classes from "./Header.module.css";
import Candle1 from "../../assessts/images/candle1.jpg";
import Candle2 from "../../assessts/images/candle2.jpg";
import Candle3 from "../../assessts/images/candle3.jpg";
import Candle4 from "../../assessts/images/candle4.jpg";

const Brand = () => {
  return (
    <div className={`${classes.BrandWrapper}`}>
      <div className={`${classes.BrandQuote}`}>
        <h1>Exquisite candles crafted with care and precision.</h1>
      </div>
      <div className={`${classes.BrandGallery}`}>
        <div className={`${classes.BrandType}`}>
          <div className={`${classes.ImageOverlayEffect}`}></div>
          <img src={Candle1} alt="candle-1" />
          <h2>Merry Treats</h2>
          <p>View gifts</p>
        </div>

        <div className={`${classes.BrandType}`}>
          <div className={`${classes.ImageOverlayEffect}`}></div>

          <img src={Candle2} alt="candle-1" />
          <h2>Extraordinary Fragrances</h2>
          <p>View candles</p>
        </div>

        <div className={`${classes.BrandType}`}>
          <div className={`${classes.ImageOverlayEffect}`}></div>

          <img src={Candle3} alt="candle-1" />
          <h2>Chic Pastels</h2>
          <p>View by collection</p>
        </div>

        <div className={`${classes.BrandType}`}>
          <div className={`${classes.ImageOverlayEffect}`}></div>

          <img src={Candle4} alt="candle-1" />
          <h2>Tender Loving Care</h2>
          <p>View accessories</p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
