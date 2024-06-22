import React, { useState } from "react";
import classes from "./Header.module.css";
import Card from "../../components/card/Card";

const BestSeller = () => {
  const [products, setProducts] = useState([
    {
      name: "Lavender Bliss",
      scent: "Lavender",
      price: 151.99,
      image:[ "/images/example.jpg","/images/example2.jpg"]

    },
    {
      name: "Citrus Burst",
      scent: "Citrus",
      price: 121.49,
      image: [ "/images/example.jpg","/images/example2.jpg"],
    },
    {
      name: "Ocean Breeze",
      scent: "Ocean",
      price: 141.99,
      image: [ "/images/example.jpg","/images/example2.jpg"],
    },
    {
      name: "Rose Garden",
      scent: "Rose",
      price: 131.99,
      image: [ "/images/example.jpg","/images/example2.jpg"],
    },
    {
      name: "Vanilla Dream",
      scent: "Vanilla",
      price: 161.49,
      image: [ "/images/example.jpg","/images/example2.jpg"],
    },
    {
      name: "Fresh Pine",
      scent: "Pine",
      price: 141.49,
      image: [ "/images/example.jpg","/images/example2.jpg"],
    },
    {
      name: "Berry Delight",
      scent: "Berry",
      price: 151.29,
      image: [ "/images/example.jpg","/images/example2.jpg"],
    },
    {
      name: "Minty Fresh",
      scent: "Mint",
      price: 131.59,
      image: [ "/images/example.jpg","/images/example2.jpg"],
    },
    {
      name: "Spiced Cinnamon",
      scent: "Cinnamon",
      price: 121.99,
      image: [ "/images/example.jpg","/images/example2.jpg"],
    },
    {
      name: "Eucalyptus Escape",
      scent: "Eucalyptus",
      price: 171.99,
      image: [ "/images/example.jpg","/images/example2.jpg"],
    },
  ]);
  const [visibleRows, setVisibleRows] = useState(6);
  const handleViewMore = () => {
    alert("new page under construction"); 
  };

  return (
    <div className={`${classes.BestSellerWrapper}`}>
      <div className={`${classes.BestSellerHeading}`}>
        <h1>Our Bestsellers</h1>
      </div>

      <div className={`${classes.ProductCatalogue}`}>
        {products.slice(0,visibleRows).map((product, index) => (
          <Card key={index} product={product} />
        ))}
        {products.length && visibleRows &&(
            <div className={`${classes.ButtonContainer}`}>
            <button onClick={handleViewMore} className={`${classes.ViewMoreButton}`}>view more</button>
            </div>
        )

        }
      </div>
    </div>
  );
};

export default BestSeller;
