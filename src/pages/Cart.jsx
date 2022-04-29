import React from 'react';
import Announcement from '../components/Announcement';
import CartItem from '../components/CartItem';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Cart = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className='p-5'>
                <div className='flex justify-center text-5xl'>
                    Cart
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <button className='btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white'>Continue Shopping</button>
                    <div className='flex underline text-lg hover:cursor-pointer'>
                        <p>Items in you cart: 3</p>
                        <p className='ml-5'>Wishlisted Items: 0</p>
                    </div>
                    <button className='btn'>Checkout</button>
                </div>
                
                <div className='flex flex-1 items-start justify-between p-10'>
                    <div className='w-[70%] mt-7 mb-7'>
                        <CartItem />

                        <CartItem />

                        <CartItem />
                    </div>

                    <div className='w-[25%] h-[40vh] p-5 flex mt-7 mb-7 flex-col items-center justify-start border-[2px] border-silver rounded-md shadow-lg'>
                        <h1 className='text-[2rem] flex flex-col '>Summary</h1>
                        <div className='flex justify-between mt-3 w-[100%]'>
                            <p>Subtotal</p>
                            <p>£<span>140</span></p>
                        </div>
                        <div className='flex justify-between mt-3 w-[100%]'>
                            <p>Shipping</p>
                            <p>£<span>40</span></p>
                        </div>
                        <div className='flex justify-between mt-3 w-[100%]'>
                            <p>Shipping discount</p>
                            <p>£<span>40</span></p>
                        </div>
                        <div className='flex justify-between mt-6 w-[100%] text-[1.3rem] font-bold border-t-2'>
                            <p>Total</p>
                            <p>£<span>40</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Cart;
