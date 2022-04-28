import React from 'react';

const Newsletter = () => {
    return (
        <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]'>
            <div>
                <h1 className='text-[50px] text-center font-bold'>IT'S DISCOUNT SEASON!</h1>
                <h2 className='text-[20px] text-center mt-2'>Get the latest information on all our biggest deals</h2>
            </div>
            <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-[#ffffff] border-[#cccccc] rounded-[5px] overflow-hidden shadow-lg'>
                <input type="email" placeholder="johndoe@gmail.com" className='border-none pl-[20px] flex-[7] outline-none' />
                <button className="btn shadow-lg">Subscribe now</button>
            </div>
        </div>
    );
}

export default Newsletter;
