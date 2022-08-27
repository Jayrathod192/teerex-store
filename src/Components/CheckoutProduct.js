import React, { useState } from "react";
// import React, { useEffect, useState } from "react";
import "../CheckoutProduct.css";
// import reducer from "../reducer";
// import { useStateValue } from "../StateProvider";

function CheckoutProduct({ item, hideButton, remove, handlePrice }) {
  const { id, imageURL, name, price, quantity } = item;
  // const [{ basket }, dispatch] = useStateValue();
  let [qty, setqty] = useState(1);

  // const removeFromBasket = () => {
  //   // remove the item from the basket
  //   dispatch({
  //     type: "REMOVE_FROM_BASKET",
  //     id: id,
  //   });
  // };

  // useEffect(() => {
  //   if (quantity >= qty + 1) {
  //     alert("No stock");
  //   }
  // }, [quantity]);

  const incQty = () => {
    console.log("increment");
    // console.log(qty);
    if (item.q < quantity) {
      setqty((item.q = item.q + 1));
      handlePrice();
    } else {
      alert("max quantity");
    }
  };

  const decQty = () => {
    console.log("decrement");
    if (item.q > 1) {
      setqty((item.q = item.q - 1));
      handlePrice();
    } else {
      remove(id);
    }
  };

  //   const addQty = (num) => {
  //     dispatch({
  //       type: "ADD_QTY",
  //       payload: num + 1,
  //     });
  //   };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={imageURL} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
          {/* <strong>{qty}</strong> */}
        </p>
        <button className="btn-icon" onClick={incQty}>
          +
        </button>
        <p style={{ display: "inline-block" }}>{item.q}</p>
        <button className="btn-icon" onClick={decQty}>
          -
        </button>
        {!hideButton && <button onClick={() => remove(id)}>Remove</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
