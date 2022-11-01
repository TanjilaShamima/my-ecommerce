import React, { PropsWithChildren } from "react";
import { productType } from "../../utils/dataType";
import "./SingleProduct.scss";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

interface SingleProductProps {
  item: productType;
}

const SingleProduct = ({ item }: PropsWithChildren<SingleProductProps>) => {
  return (
    <div className="product-container">
      <div className="circle"></div>
      <div className="image">
        <img src={item.img} alt="" />
      </div>
      <div className="info-container">
        <div className="icon">
            <ShoppingCartOutlinedIcon />
        </div>
        <div className="icon">
            <SearchOutlinedIcon />
        </div>
        <div className="icon">
            <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
