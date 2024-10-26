import React from 'react';

const Class = ({cls}) => {
    const {name, photo, description, price, instructor} = cls
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border hover:border-blue-500 duration-300 hover:shadow-sm hover:rounded-md">
              <figure><img className='hover:scale-150 duration-300' src={photo} alt="Shoes" /></figure>
              <div className="card-body text-start">
                <h2 className="card-title font-bold">{name}</h2>
                <p><span className='font-bold'>Instructor:</span> {instructor}</p>
                <p><span className='font-bold'>Price:</span> ৳{price}</p>
                <p><span className='font-bold'>Description:</span> {description}</p>
              </div>
            </div>
            
        </div>
    );
};
export default Class;