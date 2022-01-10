import React, { useState } from "react";
import products from "../../fakeData/products.js";
import Product from "../Product/Product.js";
import Cart from "../Cart/Cart.js";
import "../Shop/Shop.css";

const Shop = () => {
  const first10 = products.slice(0, 10);
  const [product, setProduct] = useState(first10);
  const [cart, setCart] = useState([]);

  const addCartHandle = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  const product_item = product.map((item) => {
    return <Product addCartHandle={addCartHandle} product={item}></Product>;
  });
  return (
    <div className="shop">
      <div className="shop-container">
        <div className="product-wrapper">{product_item}</div>
        <div className="cart-wrapper">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
