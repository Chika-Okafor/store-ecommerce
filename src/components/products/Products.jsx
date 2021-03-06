import React from 'react';
import { ProductsSrc } from '../../APIComponents/TopProductsAPI';
import Headline from '../Headline';
import Product from './Product';

const Products = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-[50px] mt-5 mb-20'>
            <Headline headline='Top Sellers' />
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
