import React from 'react';
import { ProductsSrc } from '../../APIComponents/TopProductsAPI';
import Product from './Product';

const Products = () => {
    return (
        <div className='flex flex-row flex-wrap p-5 items-center justify-center'>
            {
                ProductsSrc.map((product, index) => {
                    return (
                        <Product product={product} key={index} />
                    )
                })
            }
        </div>
    );
}

export default Products;
