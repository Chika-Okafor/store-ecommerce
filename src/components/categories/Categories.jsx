import React from 'react';
import { CategoriesList } from '../../APIComponents/CategoriesAPI';
import Headline from '../Headline';
import Category from './Category';

const Categories = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-[50px]'>
            <Headline headline='Shop Categories' />
            <div className='flex justify-between items-center p-5'>
                {
                    CategoriesList.map((category, index) => {
                        return (
                            <Category key={index} category={category} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Categories;
