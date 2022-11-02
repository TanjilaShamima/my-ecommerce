import React from "react";
import "./ProductDetails.scss";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ProductDetails = () => {
  return (
    <div className="details-container">
      <div className="wrapper">
        <div className="img-container">
          <img src="/images/category/1.jpg" alt="" />
        </div>
        <div className="info-container">
          <h1 className="title">Denim Jumpsuit</h1>
          <div className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className="price">$ 20</div>
          <div className="filter-container">
            <div className="filter">
              <div className="filter-title">Color</div>
              <div className="filter-color" style={{backgroundColor: 'black'}} />
              <div className="filter-color" style={{backgroundColor: 'darkblue'}} />
              <div className="filter-color" style={{backgroundColor: 'gray'}} />
              <div className="filter-color" style={{backgroundColor: 'pink'}} />
            </div>
            <div className="filter">
              <span className="filter-title">Size</span>
              <select name="size" id="size">
                <option value="" disabled>
                  Size
                </option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount-container">
                <RemoveIcon />
                <div className="amount">1</div>
                <AddIcon />
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
