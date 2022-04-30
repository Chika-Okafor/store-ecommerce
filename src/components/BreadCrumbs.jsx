import React from 'react';

const BreadCrumbs = (props) => {
    return (
        <div className='flex items-center justify-start pl-5 pt-1 pb-1'>
            <p>{props.pageCrumbs}</p>
        </div>
    );
}

export default BreadCrumbs;
