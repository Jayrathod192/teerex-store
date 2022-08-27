import React, { useEffect, useState } from "react";
import { getBasketTotal } from "../reducer";
// import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "../CheckoutProduct.css";

const Cart = ({ id, imageUrl, title, price, cart, setCart }) => {
  // const [{ basket }, dispatch] = useStateValue();
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };
  const [total, setPrice] = useState(0);

  // const ids = cart.map((o) => o.id);
  // const filtered = cart.filter(({ id }, index) => !ids.includes(id, index + 1));

  // console.log(filtered);
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.q * item.price));
    setPrice(ans);
  };

  const totalQuantity = cart.map((item) => {
    return item.q;
  });

  useEffect(() => {
    handlePrice();
  });
  return (
    <div>
      <h1>cart</h1>
      <p>
        Subtotal ({totalQuantity.reduce((a, b) => a + b, 0)} items):{" "}
        <strong> $ {total}</strong>
      </p>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id}>
            <CheckoutProduct
              item={item}
              cart={cart}
              remove={handleRemove}
              handlePrice={handlePrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
