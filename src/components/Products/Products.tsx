import React from "react";
import "./Products.scss";
import { popularProducts } from "../../data/popularProducts";
import SingleProduct from "../SingleProduct";

const Products = () => {
  return (
    <div className="products-container">
      {popularProducts.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
