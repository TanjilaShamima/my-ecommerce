import React, {PropsWithChildren} from 'react';
import { productType } from '../../utils/dataType';
import './SingleProduct.scss'

interface SingleProductProps {
    item: productType
}


const SingleProduct = ({item}: PropsWithChildren<SingleProductProps>) => {
    return (
        <div className='product-container'>
            
        </div>
    );
};

export default SingleProduct;