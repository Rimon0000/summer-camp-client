import React from 'react';

const Instructor = ({instructor}) => {
    const {photoURL} = instructor
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={photoURL} alt="Shoes" /></figure>
        </div>
    );
};

export default Instructor;