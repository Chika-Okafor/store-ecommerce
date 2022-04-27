import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { React, useState } from 'react';

const Product = ({product}) => {
    const iconStyles = 'h-[40px] w-[40px] rounded-full bg-[#ffffff] flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-[#ffffff] hover:scale-[1.1] ease-in duration-100';

    const [hoverEffect, setHoverEffect] = useState('opacity-0');

    const applyHoverEffect = () => {
        setHoverEffect('opacity:-1 bg-[rgba(0,0,0,0.2)]');
    };

    const removeHoverEffect = () => {
        setHoverEffect('opacity-0');
    };

    return (
        <div className='flex items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative' onMouseEnter={applyHoverEffect} onMouseLeave={removeHoverEffect}>
            <img src={product.src} alt='Product Image' className=''/>
            <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100 ` + hoverEffect}>
                <div className={iconStyles}>
                    <ShoppingCartOutlined />
                </div>
                <div className={iconStyles}>
                    <FavoriteBorderOutlined />
                </div>
                <div className={iconStyles}>
                    <SearchOutlined />
                </div>
            </div>
        </div>
    );
}

export default Product;
