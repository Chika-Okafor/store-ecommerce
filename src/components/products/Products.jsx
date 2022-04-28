import React from 'react';
import { ProductsSrc } from '../../APIComponents/TopProductsAPI';
import Product from './Product';

const Products = () => {
    return (
        <div className='flex items-center mt-20 mb-20 justify-center'>
            <div className='flex flex-wrap items-center justify-center w-[80%]'>
                {
                    ProductsSrc.map((product, index) => {
                        return (
                            <Product product={product} key={index} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Products;
