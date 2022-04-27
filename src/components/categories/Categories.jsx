import React from 'react';
import { CategoriesList } from '../../APIComponents/CategoriesAPI';
import Category from './Category';

const Categories = () => {
    return (
        <div className='flex justify-between items-center p-5'>
            {
                CategoriesList.map((category, index) => {
                    return (
                        <Category key={index} category={category} />
                    );
                })
            }
        </div>
    );
}

export default Categories;
