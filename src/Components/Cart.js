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

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const ids = cart.map((o) => o.id);
  const filtered = cart.filter(({ id }, index) => !ids.includes(id, index + 1));

  // console.log(filtered);

  useEffect(() => {
    handlePrice();
  });
  return (
    <div>
      <h1>cart</h1>
      <p>
        Subtotal ({filtered.length} items):{" "}
        <strong> $ {getBasketTotal(filtered)}</strong>
      </p>

      <div className="cart-items">
        {filtered.map((item) => (
          <div key={item.id}>
            <CheckoutProduct
              item={item}
              cart={filtered}
              remove={handleRemove}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
