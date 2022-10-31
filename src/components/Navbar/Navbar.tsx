import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.scss";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="left">
          <div className="language">EN</div>
          <div className="search-container">
            <input />
            <SearchIcon  style={{color: "gray", fontSize: "16px"}} />
          </div>
        </div>
        <div className="center">
          <h1 className="logo">MY STORE</h1>
        </div>
        <div className="right">
          <div className="menu-item">REGISTER</div>
          <div className="menu-item">SIGN IN</div>
          <div className="menu-item">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
