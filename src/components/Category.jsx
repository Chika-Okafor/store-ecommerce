import React from 'react';

const Category = (props) => {
    return (
        <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
            <img src={props.category.src} alt='Image Category' className='w-[100%]'/>
            <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
                <h2 className='text-white font-medium text-[30px]'>{props.category.title}</h2>
                <button className='btn '>See more</button>
            </div>
        </div>
    );
}

export default Category;
