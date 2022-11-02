import React from "react";
import "./ProductList.scss";

const ProductList = () => {
  return (
    <div className="list-container">
      <h1 className="title">Dresses</h1>
      <div className="filter-container">
        <div className="filter">
          <span className="filter-text">Filter Products</span>
          <select name="Color" id="Color">
            <option value="" disabled>Color</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>
          <select name="size" id="size">
            <option value="" disabled>Size</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filter-text">Sort Products</span>
          <select>
            <option value="newest" selected>Newest</option>
            <option value="asc">Price(asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
