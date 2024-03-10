import React, {useState} from "react";

function Item({ name, category }) {

  const [cartStatus, setCartStatus] = useState("")

  function handleCart() {
    if (cartStatus === "") {
      setCartStatus("in-cart")
    } else {
      setCartStatus("")
    }
  };

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => handleCart()}>Add to Cart</button>
    </li>
  );
}

export default Item;
