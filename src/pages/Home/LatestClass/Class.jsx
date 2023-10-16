import React from 'react';

const Class = ({cls}) => {
    const {name, photo, description, price, instructor} = cls
    return (
        <div>
            <div className="card bg-base-100 shadow-xl zoomable-image">
              <figure><img src={photo} alt="Shoes" /></figure>
              <div className="card-body text-start">
                <h2 className="card-title">{name}</h2>
                <p className='font-semibold'>Instructor: {instructor}</p>
                <p className='font-bold'>Price: <span className='font-semibold'>৳{price}</span></p>
                <p className='text-start'>Description: {description}</p>
              </div>
            </div>
            
        </div>
    );
};
export default Class;