import React from 'react';
import { CategoriesList } from '../APIComponents/CategoriesAPI';
import Category from './Category';

const Categories = () => {
    return (
        <div className='flex justify-between items-center p-5'>
            <Category category={CategoriesList[0]}/>
            <Category category={CategoriesList[1]}/>
            <Category category={CategoriesList[2]}/>
        </div>
    );
}

export default Categories;
