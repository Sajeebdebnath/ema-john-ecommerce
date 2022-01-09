import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../Product/Product.css";

const Product = (props) => {
  const { img, name, price, seller, stock } = props.product;
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={img} alt={name} />
      </div>
      <div className="product-content">
        <h4 className="product-name">{name}</h4>
        <p>
          by <span>{seller}</span>
        </p>
        <h5>$ {price}</h5>
        <p>
          only <span>{stock}</span> left in stock - order soon
        </p>
        <button
          onClick={() => props.addCartHandle(props.product)}
          className="cart_button">
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
