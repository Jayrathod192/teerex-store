import React, { useEffect, useState } from "react";
import Shopitem from "./Shopitem";

const Shop = ({ addToCart }) => {
  const [products, setProduct] = useState([]);
  const getData = async () => {
    const url =
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
    let data = await fetch(url);
    let parsedData = await data.json();

    // console.log(item);
    setProduct(parsedData);
  };

  useEffect(() => {
    getData();
  }, []);

  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCheck = (e) => {
    setChecked([...checked, e.target.value]);
    console.log(checked);
  };

  return (
    <div className="container my-3">
      <h1>Shop</h1>
      <input
        type="text"
        id="search"
        name="search"
        // value={search}
        onChange={onChange}
        placeholder="search"
      />
      {/* <button id="btn btn-primary">Search</button> */}

      <div className="row">
        <div className="col-md-3">
          <h1>Filter</h1>

          <div>
            <h4 className="text-start">Colour</h4>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value="Red"
                name="Red"
                id="flexCheckDefault"
                // checked={checked}
                onChange={handleCheck}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Red
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value="Blue"
                onChange={handleCheck}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Blue
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value="Black"
                onChange={handleCheck}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Black
              </label>
            </div>
          </div>

          <div>
            <h4 className="text-start">Colour</h4>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Red
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Blue
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Black
              </label>
            </div>
          </div>

          <div>
            <h4 className="text-start">Colour</h4>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Red
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Blue
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Black
              </label>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="row">
            <h1>Items</h1>
            {products
              .filter((product) => {
                let content = product.name + " " + product.gender;
                let content1 = product.gender + " " + product.name;
                let content2 =
                  product.type + " " + product.gender + " " + product.color;
                let content3 =
                  product.type + " " + product.color + " " + product.gender;
                let content4 =
                  product.gender + " " + product.type + " " + product.color;
                let content5 =
                  product.color + " " + product.gender + " " + product.type;
                // let [a, b, c] = [checked];
                // console.log(content.toLowerCase());
                if (search === "") {
                  return product;
                } else if (
                  content.toLowerCase().includes(search.toLowerCase()) ||
                  content1.toLowerCase().includes(search.toLowerCase()) ||
                  content2.toLowerCase().includes(search.toLowerCase()) ||
                  content3.toLowerCase().includes(search.toLowerCase()) ||
                  content4.toLowerCase().includes(search.toLowerCase()) ||
                  content5.toLowerCase().includes(search.toLowerCase())
                ) {
                  // console.log(search);
                  return product;
                }
              })
              .map((product) => {
                // console.log(val);
                return (
                  <div className="col-md-4" key={product.id}>
                    <Shopitem
                      id={product.id}
                      item={product}
                      addToCart={addToCart}
                    />
                  </div>
                );
              })}

            {/* {products
              .filter((product) => {
                checked.filter((col) => {
                  if (product.color) {
                    console.log(product.color);
                    return product;
                  } else {
                    console.log("np");
                    // console.log(product);
                  }
                });
              })
              .map((product) => {
                return (
                  <div className="col-md-4" key={product.id}>
                    <Shopitem
                      id={product.id}
                      title={product.name}
                      imageUrl={product.imageURL}
                      price={product.price}
                      type={product.type}
                      color={product.color}
                      gender={product.gender}
                      qty={product.quantity}
                    />
                  </div>
                );
              })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
