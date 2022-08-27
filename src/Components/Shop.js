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
  const [filter, setChecked] = useState("none");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  // const handleCheck = (e) => {
  //   setChecked([...checked, e.target.value]);
  //   console.log(checked);
  // };
  const handleCheck = (e) => {
    // setChecked([...checked, e.target.value]);
    // console.log(checked);
    if (filter === e.target.value) setChecked({ filter: "none" });
    else setChecked({ filter: e.target.value, checked: true });
    console.log(filter);
  };

  const searchList = products.filter((item) => {
    if (item.color.toLowerCase() === search.toLowerCase()) return item;
  });

  if (searchList) {
    // setProduct(searchList);
  }

  const checkBox = products.filter((item) => {
    if (
      item.color === filter["filter"] ||
      item.gender === filter["filter"] ||
      filter === "none"
    )
      return item;
  });

  // console.log(searchLIst);

  console.log(checkBox);

  return (
    <div className="container my-3">
      <h1>Shop</h1>
      {/* <input
        type="text"
        id="search"
        name="search"
        // value={search}
        onChange={onChange}
        placeholder="search"
      /> */}
      <input
        className="form-control m-3"
        type="search"
        id="search"
        name="search"
        placeholder="Search"
        onChange={onChange}
        aria-label="Search"
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
            <h4 className="text-start">Gender</h4>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value="Men"
                onChange={handleCheck}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Men
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value="Women"
                onChange={handleCheck}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Women
              </label>
            </div>
          </div>

          <div>
            <h4 className="text-start">Price</h4>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value="250"
                onChange={handleCheck}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                250
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value="350"
                onChange={handleCheck}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                350
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                className="form-check-input mx-2"
                type="checkbox"
                value="450"
                onChange={handleCheck}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                450
              </label>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="row">
            <h1>Items</h1>
            {products.map((product) => {
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
