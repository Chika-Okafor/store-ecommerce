import React from 'react';
import CounterButtons from './CounterButtons';

const Counter = () => {
    return (
        <div className='flex items-center justify-center text-2xl'>
            Quantity
            <CounterButtons />
        </div>
    );
}

export default Counter;
