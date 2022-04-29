import React from 'react';
import Counter from './Counter';

const Itemdescription = () => {
    const colorOptionStyles = 'w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-silver hover:border-4';
    return (
        <div className='flex justify-center'>
            <div className='flex flex-1 items-center justify-center'>
                <img src='https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216' alt='Product Image' className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.2]' />
            </div>
            <div className='flex flex-[1.3] items-start justify-items-start flex-col mt-10'>
                <h1 className='title text-[40px]'>Cream Hoodie 100% Original Cotton</h1>
                <p className='pr-[4rem] text-justify mt-4 '>Demonstrate the ability to formulate and evaluate an innovation strategy for a new technology-based product or service venture. Identofy and evaluate the impact of a future disruptive innovation affecting the selected organisation.</p>
                <p className='mt-7 text-3xl'>Price: <b>£70</b></p>
                <div className='flex text-2xl mt-7'>
                    Colour
                    <div className={colorOptionStyles + ` bg-red-600`}></div>
                    <div className={colorOptionStyles + ` bg-green-600`}></div>
                    <div className={colorOptionStyles + ` bg-blue-600`}></div>
                </div>
                <div className='mt-7 text-2xl'>
                    Size
                    <select name="" id="" className='ml-5 border-2'>
                        <option selected disabled value="">Select size</option>
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                    </select>
                </div>
                <div className='mt-5'>
                    <Counter />
                </div>
                <button className='btn mt-10'>Add to Cart</button>
            </div>
        </div>
    );
}

export default Itemdescription;
