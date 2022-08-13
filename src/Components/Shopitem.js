import React from "react";

const Shopitem = (props) => {
  let { title, imageUrl, price } = props;
  return (
    <>
      <div className="grid">
        <div className="card mx-3 my-3">
          <img src={imageUrl} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Rs. {price}</p>
            <a href="/" className="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopitem;
