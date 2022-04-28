import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { SlidesList } from '../APIComponents/SliderAPI';
import '../index.css';

const Hero = () => {
    //-----------------------Component Styles---------------------------------
    const arrowStyles = 'rounded-full bg-grey flex justify-center items-center shadow-md hover:cursor-pointer border-[1px] ml-[20px] mr-[20px]';
    const slideIndicators = document.getElementsByClassName("slideIndicators");

    //-----------------------Component Styles---------------------------------
    const nextSlide = () => {
        if (currentSlide === slides.length - 1) {
            setNewSlide(0);
        } else {
            setNewSlide(currentSlide + 1)
        };
    };

    const previousSlide = () => {
        if (currentSlide === 0) {
            setNewSlide(slides.length - 1);
        } else {
            setNewSlide(currentSlide - 1)
        };
    };


    //-----------------------useState Hooks---------------------------------
    const [slides] = useState(SlidesList);
    const [currentSlide, setNewSlide] = useState(0);

    return (
        <div className='hero-wrapper h-[540px] bg-[#ffffff] flex items-center justify-between shadow-2xl w-[100%] mb-[30px] border-[1px]'>
            
            {/*-----------------------Toggle Left Button----------------------*/}
            <div className={arrowStyles} onClick={previousSlide}>
                <ArrowLeftOutlined  style={{ fontSize: 50 }}/>
            </div>
            
            {/*-----------------------Hero Image----------------------*/}
            {slides.map((slide, index) => {
                if (index === currentSlide) {
                    return (
                        <div key={index} className='hero flex w-[100%] h-[100%] justify-center items-center flex-wrap rounded-lg relative bg-[#ffffff]'>
                            <div className='slide flex items-center justify-between h-[100%] w-[100%]'>
                                <div className='hero-image flex flex-1 justify-center items-center h-[100%] w-[40%]'>
                                    <img className='h-[100%] object-cover' src={slide.src} alt='hero-mage' />
                                </div>
                                <div className='hero-text flex flex-col flex-1 place-items-start justify-center ml-[11]  w-[60%]'>
                                    <h2 className='text-[55px]'>{slide.content.h2}</h2>
                                    <p className='text-[32px] mt-[15px] mb-[50px]'>{slide.content.p}</p>
                                    <button className='btn'>Shop now</button>
                                </div>
                            </div>
                            <div className='slide-indicator w-[100%] h-[15px] border-[5px] bg-[#ffffff] flex justify-center items-center'>
                                <div className='slideIndicators h-[100%] w-[25%] rounded-lg bg-[#000000]'></div>
                                <div className='slideIndicators h-[100%] w-[25%]'></div>
                                <div className='slideIndicators h-[100%] w-[25%]'></div>
                                <div className='slideIndicators h-[100%] w-[25%]'></div>
                            </div>
                        </div>
                    );
                };
            })}
            
            {/*-----------------------Toggle Right Button----------------------*/}
            <div className={arrowStyles} onClick={nextSlide}>
                <ArrowRightOutlined style={{ fontSize: 50 }}/>
            </div>

        </div>
    );
}

export default Hero;
