import React from "react";
// import { useStateValue } from "../StateProvider";

const Shopitem = ({ item, addToCart }) => {
  // let { title, imageUrl, price } = props;
  const { name, imageURL, price, quantity } = item;
  item.q = 1;

  // const [{ basket }, dispatch] = useStateValue();

  // const addToBasket = () => {
  //   // dispatch the item into the data layer
  //   if (quantity > 0) {
  //     dispatch({
  //       type: "ADD_TO_BASKET",
  //       item: {
  //         id: id,
  //         title: name,
  //         image: imageURL,
  //         price: price,
  //         qty: quantity,
  //       },
  //     });
  //   } else {
  //     alert("Out of stock");
  //   }
  // };

  return (
    <>
      <div className="grid">
        <div className="card mx-3 my-3">
          <img src={imageURL} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Rs. {price}</p>
            <p className="card-text">
              {quantity === 0 ? "Out of stock" : "Quantity : " + quantity}
            </p>

            <button
              className="btn btn-primary"
              onClick={() => {
                addToCart(item, item.q);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopitem;
