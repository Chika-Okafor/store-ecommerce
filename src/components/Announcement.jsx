import { Close } from '@mui/icons-material';
import React, { useState } from 'react';

const Announcement = () => {
    const [announcementStyles, setAnnouncementStyles] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center');

    const handleClose = () => {
        setAnnouncementStyles(announcementStyles + " hidden")
    };

    return (
        <div className={announcementStyles}>
            <h2>Hurry! Get up to 70% off this summer!!</h2>
            <Close className='cursor-pointer' onClick= {handleClose}/>
        </div>
    );
}

export default Announcement;
