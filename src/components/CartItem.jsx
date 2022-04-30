import React from 'react';
import CounterButtons from './CounterButtons';

const CartItem = () => {
    return (
        <div className='flex border-b-2 w-[100%] bg-[#f1f1f1] mb-3 rounded-md'>
            <div className='flex w-[60%] h-auto items-center justify-start rounded-md'>
                <div className='product flex self-start pl-5'>
                    <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733" alt="Product Image" className='w-[7rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] m-3' />
                </div>
                <div className='product-description flex flex-col ml-5 mt-3'>
                    <p className='pb-2'><b className='mr-2'>ID:</b>123456</p>
                    <p className='pb-2'><b className='mr-2'>Product:</b>Dazzling Sky Shirt</p>
                    <div className='flex items-center justify-start pb-2'>
                        <b className=''>Colour:</b>
                        <div className='w-[1.5rem] h-[1.5rem] rounded-full border-2 border-white p-[5px] ml-3 bg-red-600'></div>
                    </div>
                    <p className='pb-2'><b className='mr-2'>Size:</b> Small</p>
                </div>
            </div>
            <div className='flex justify-around items-center flex-auto text-2xl w-[40%]'>
                <CounterButtons />
                <p className='flex items-center justify-center text-2xl'>
                    <b className='flex items-center justify-center'>£<span>70</span></b>
                </p>
            </div>
        </div>
    );
}

export default CartItem;
