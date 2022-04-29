import { Add, Remove } from '@mui/icons-material';
import React from 'react';

const CounterButtons = () => {
    const plusMinusBtnStyles = 'bg-[#8a4af3] text-[#ffffff] w-8 flex items-center justify-center cursor-pointer border-[#8a4af3]';
    return (
        <div className='ml-5 shadow-md flex'>
            <div className={plusMinusBtnStyles + ` rounded-l-md`}>
                <Remove />
            </div>
            <div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3] bg-white'>
                1
            </div>
            <div className={plusMinusBtnStyles + ` rounded-r-md`}>
                <Add />
            </div>
        </div>
    );
}

export default CounterButtons;
