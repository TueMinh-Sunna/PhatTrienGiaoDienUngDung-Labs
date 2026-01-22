import React from "react";
import './ProductCard.css'

const ProductCard = ({ src, name, price }) => {
    return (
        <div className="product-card">
            <img
                src={src}
                alt={name}
                className="product-image"
            />

            <h3 className="product-name">{name}</h3>

            <p className="product-price">{price}</p>

            <button className="add-btn">Add to cart</button>
        </div>
    )
}

export default ProductCard