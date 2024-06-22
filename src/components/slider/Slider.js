import React, { useEffect, useState } from 'react'
import heroImg from "../../assessts/images/hero.jpg";
import classes from "./Slider.module.css"
import {ReactComponent as Flower1 } from "../../assessts/svgComponents/flower1.svg"
import {ReactComponent as Flower2 } from "../../assessts/svgComponents/flower2.svg"

const Slider = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${classes.Banner}`}>
      <img src={heroImg} alt="banner"/>
      <div className={`${classes.OverlaySlide}`}></div>
       <h1 className={`${classes.OverHEADING}  ${isSticky ? classes.yessticky : classes.notsticky}`} >EXPLORE</h1>
      <Flower1 className={`${classes.svg1}`} />
      <Flower2 className={`${classes.svg2}`} />
    </div>
  )
}

export default Slider