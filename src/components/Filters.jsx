import React from 'react';

const Filters = () => {
    return (
        <div className='flex flex-col p-5'>
            <h1 className='text-[30px]'>Men</h1>
            <div className='flex items-center justify-between mt-3'>
                <div className='flex'>
                    <p>Filter by</p>
                    <select name="" id="" className='ml-3 border-2 border-silver'>
                        <option selected disabled value="Size">Size</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                    <select name="" id="" className='ml-3 border-2 border-silver'>
                        <option selected disabled value="Colour">Colour</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                    </select>
                </div>
                <div className='flex'>
                    <p>Sort by</p>
                    <select name="" id="" className='ml-3 border-2 border-silver'>
                        <option value=""> Newest</option>
                        <option value="">Oldest</option>
                        <option value="">Lowest Price</option>
                        <option value="">Highest Price</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Filters;
