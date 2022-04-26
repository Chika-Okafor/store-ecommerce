import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';

const Navbar = () => {
    const navMenuStyles = 'text-[14px] cursor-pointer ml-[25px]';
    return (
        <div className='navbar h-[60px] shadow-md relative z-10'>
            <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'>
                {/*------------------------LOGO-------------------------------*/}
                <div className='left flex-1'>
                    <div className='logo font-bold text-lg'>
                        E-Commerce Store
                    </div>
                </div>

                {/*------------------------SEARCH BAR-------------------------------*/}
                <div className='center flex flex-1 justify-center items-center'>
                    <div className='language cursor-pointer text-[16px]'>
                        En
                    </div>
                    <div className='search-bar flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all'>
                        <input className='search-input outline-none' type="text" />
                        <Search className='' fontSize='small'/>
                    </div>
                </div>

                {/*------------------------NAV MENU-------------------------------*/}
                <div className='right flex flex-1 items-center justify-end'>
                    <div className={navMenuStyles}>Register</div>
                    <div className={navMenuStyles}>Log in</div>
                    <div className={navMenuStyles}>
                        <Badge badgeContent={2} color='primary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
