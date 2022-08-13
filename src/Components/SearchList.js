import React from "react";
import Shopitem from "./Shopitem";

const SearchList = ({ filteredItem }) => {
  const filetered = filteredItem.map((item) => <Shopitem title={item.title} />);
  return <div>{filetered}</div>;
};

export default SearchList;
