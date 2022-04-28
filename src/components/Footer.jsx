import { EmailOutlined, Facebook, GitHub, Instagram, LinkedIn, LocalPhoneOutlined, LocationOnOutlined, Twitter } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
    const socialIconStyles = 'm-3 rounded-full shadow-lg flex justify-center items-center cursor-pointer p-2 text-[#ffffff]';
    return (
        <div className='flex items-center justify-center flex-wrap w-[100%]'>
            <div className='w-[100%] flex items-center justify-between mt-3 mb-5'>
                <div className='flex items-center justify-center mt-3 w-[35%]'>
                    <div className={socialIconStyles + ` bg-orange-500`}>
                        <Instagram />
                    </div>
                    <div className={socialIconStyles + ` bg-blue-700`}>
                        <LinkedIn />
                    </div>
                    <div className={socialIconStyles + ` bg-black`}>
                        <GitHub />
                    </div>
                    <div className={socialIconStyles + ` bg-blue-700`}>
                        <Facebook />
                    </div>
                    <div className={socialIconStyles + ` bg-sky-400`}>
                        <Twitter />
                    </div>
                </div>
                <div className='flex justify-evenly p-2 w-[55%]'>
                    <div className='flex mt-3 mb-3'>
                        <LocationOnOutlined />
                        <p className='pl-2'>London, UK</p>
                    </div>
                    <div className='flex mt-3 mb-3'>
                        <LocalPhoneOutlined />
                        <p className='pl-2'>+44 07X XXXX XXXX</p>
                    </div>
                    <div className='flex mt-3 mb-3'>
                        <EmailOutlined />
                        <p className='pl-2'>hello@ecommerce-store.com</p>
                    </div>
                </div>
            </div>
            <div className='text-center p-3 text-sm'>
                <p>Copyright © 2022 E-Commerce Store, Inc.</p>
            </div>
        </div>
    );
}

export default Footer;
