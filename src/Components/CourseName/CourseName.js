import React from 'react';

const CourseName = ({children,name,index,handleIndex}) => {

    return (
        <div className='d-flex align-items-center justify-content-center' onClick={()=>handleIndex(index)}>
            <span className='mx-2'>{children}</span>
            <span href='#'>{name}</span>
        </div>
    );
};

export default CourseName;