import React from 'react';

const Headline = (props) => {
    return (
        <div className='flex items-center justify-center'>
            <h2 className='text-[2rem] font-bold text-center'>{props.headline}</h2>
        </div>
    );
}

export default Headline;
