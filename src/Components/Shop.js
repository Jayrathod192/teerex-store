import React, { useEffect, useState } from "react";
import Shopitem from "./Shopitem";

const Shop = () => {
  const [item, setItem] = useState([]);
  const getData = async () => {
    const url =
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
    let data = await fetch(url);
    let parsedData = await data.json();

    // console.log(item);
    setItem(parsedData);
  };

  useEffect(() => {
    getData();
  }, []);

  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
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
      <button id="btn btn-primary">Search</button>
      <div className="row">
        {item
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(search.toLowerCase()) ||
              val.type.toLowerCase().includes(search.toLowerCase()) ||
              val.gender.toLowerCase().includes(search.toLowerCase())
            ) {
              //   console.log("hi");
              return val;
            }
          })
          .map((val) => {
            // console.log(val);
            return (
              <div className="col-md-4" key={val.id}>
                <Shopitem
                  title={val.name}
                  imageUrl={val.imageURL}
                  price={val.price}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shop;
