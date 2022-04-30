import { Close } from '@mui/icons-material';
import React, { useState } from 'react';

const Announcement = () => {
    const [announcementStyles, setAnnouncementStyles] = useState('bg-[#4b95a0] font-bold text-white pt-[5px] pb-[5px] flex items-center justify-center relative');

    const handleClose = () => {
        setAnnouncementStyles(announcementStyles + " hidden")
    };

    return (
        <div className={announcementStyles}>
            <h2>Hurry! Get up to 40% off this summer!!</h2>
            <Close className='cursor-pointer absolute right-[20px]' onClick= {handleClose}/>
        </div>
    );
}

export default Announcement;
