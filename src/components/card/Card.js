import React from 'react'
import classes from "./Card.module.css"

const Card = ({product}) => {
  return (
    <div className={`${classes.ProductCard}`}>
    <div className={`${classes.ProductCardImageContainer}`}>


    <img src={product?.image[0]} alt={product.name} />
        {product.image[1] && (
          <img src={product.image[1]} alt={product.name} />
        )}
        </div>
        <div className={`${classes.ProductDetails}`}>
        <h3>{product.name}</h3>

        <p className={`${classes.ProductScent}`}>{product.scent}</p>
        <p>{product.price.toFixed(2)}</p>
        </div>
    </div>
  )
}

export default Card