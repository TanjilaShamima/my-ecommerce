import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <h1 className="logo">MY STORE</h1>
        <div className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#3B5999" }}>
            <FacebookIcon />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#E4405F" }}>
            <InstagramIcon />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#55ACEE" }}>
            <TwitterIcon />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#E60023" }}>
            <PinterestIcon />
          </div>
        </div>
      </div>
      <div className="center">
        <h3 className="title">Useful Links</h3>
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">Cart</li>
          <li className="list-item">Man Fashion</li>
          <li className="list-item">Woman Fashion</li>
          <li className="list-item">Accessories</li>
          <li className="list-item">My Account</li>
          <li className="list-item">Order Tracking</li>
          <li className="list-item">Wishlist</li>
          <li className="list-item">Terms</li>
        </ul>
      </div>
      <div className="right">
        <h3 className="title">Contact</h3>
        <div className="contact-items">
          <RoomIcon style={{marginRight: '10px'}} />
          466, Ashkona Medical Road
        </div>
        <div className="contact-items">
          <PhoneIcon style={{marginRight: '10px'}} />
          +8801997412643
        </div>
        <div className="contact-items">
          <EmailOutlinedIcon style={{marginRight: '10px'}} />
          tanjila.cse.diu@gmail.com
        </div>
        <div className="payment">
          <img src="/images/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
