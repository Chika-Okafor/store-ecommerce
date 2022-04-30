import React from 'react';
import { ProductsSrc } from '../../APIComponents/TopProductsAPI';
import Product from '../products/Product';

const ShopItems = () => {
    return (
        <div className='flex items-center justify-center w-[100%] mt-5 mb-10'>
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

export default ShopItems;
