import React from "react";
import "./CartComponent.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartComponent = () => {
  return (
    <div className="cart-container">
      <div className="wrapper">
        <h1 className="title">YOUR BAG</h1>
        <div className="top">
          <button className="top-button">CONTINUE SHOPPING</button>
          <div className="top-texts">
            <div className="top-text">Shopping Bag (2)</div>
            <div className="top-text">Your WishList (0)</div>
          </div>
          <button className="top-button checkout">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="product">
              <div className="product-details">
                <img
                  src="https://m.media-amazon.com/images/I/413r7DcmneL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
                  alt="product"
                />
                <div className="details">
                  <div className="product-name">
                    <b>Product: </b>DESSIE THUNDER SHOES
                  </div>
                  <div className="product-id">
                    <b>ID: </b>12345678
                  </div>
                  <div
                    className="product-color"
                    style={{ backgroundColor: "black" }}
                  />
                  <div className="product-size">
                    <b>Size: </b>37.5
                  </div>
                </div>
              </div>
              <div className="price-details">
                <div className="product-amount">
                  <RemoveIcon />
                  <div className="amount">2</div>
                  <AddIcon />
                </div>
                <div className="product-price">$ 30</div>
              </div>
            </div>
            <hr />
            <div className="product">
              <div className="product-details">
                <img
                  src="https://assets.hermes.com/is/image/hermesproduct/h-embroidered-t-shirt--072025HA01-worn-5-0-0-800-800_b.jpg"
                  alt="product"
                />
                <div className="details">
                  <div className="product-name">
                    <b>Product: </b>DESSIE THUNDER SHOES
                  </div>
                  <div className="product-id">
                    <b>ID: </b>12345678
                  </div>
                  <div
                    className="product-color"
                    style={{ backgroundColor: "black" }}
                  />
                  <div className="product-size">
                    <b>Size: </b>37.5
                  </div>
                </div>
              </div>
              <div className="price-details">
                <div className="product-amount">
                  <RemoveIcon />
                  <div className="amount">2</div>
                  <AddIcon />
                </div>
                <div className="product-price">$ 30</div>
              </div>
            </div>
            <hr />
            <div className="product">
              <div className="product-details">
                <img
                  src="https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg"
                  alt="product"
                />
                <div className="details">
                  <div className="product-name">
                    <b>Product: </b>DESSIE THUNDER SHOES
                  </div>
                  <div className="product-id">
                    <b>ID: </b>12345678
                  </div>
                  <div
                    className="product-color"
                    style={{ backgroundColor: "black" }}
                  />
                  <div className="product-size">
                    <b>Size: </b>37.5
                  </div>
                </div>
              </div>
              <div className="price-details">
                <div className="product-amount">
                  <RemoveIcon />
                  <div className="amount">2</div>
                  <AddIcon />
                </div>
                <div className="product-price">$ 30</div>
              </div>
            </div>
          </div>
          <div className="summery">
            <h1 className="summery-title">ORDER SUMMERY</h1>
            <div className="summery-items">
              <div className="summery-item-text">Subtotal</div>
              <div className="summery-item-price">$ 80</div>
            </div>
            <div className="summery-items">
              <div className="summery-item-text">Estimated Shipping</div>
              <div className="summery-item-price">$ 5.90</div>
            </div>
            <div className="summery-items">
              <div className="summery-item-text">Shipping Discount</div>
              <div className="summery-item-price">$ -5.90</div>
            </div>
            <div className="summery-items total" style={{ fontWeight: "700", fontSize: '24px' }}>
              <div className="summery-item-text">
                Total
              </div>
              <div className="summery-item-price"> 
                $ 80
              </div>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
