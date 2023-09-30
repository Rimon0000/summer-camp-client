import React from "react";

const Instructor = ({ instructor }) => {
  const { photoURL, name } = instructor;
  return (
    <div className='card xl:w-80 bg-base-100 shadow-xl'>
      <figure>
        <img src={photoURL} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className="font-bold">Instructor Name: <span className="font-semibold">{name}</span></h2>
      </div>
    </div>
  );
};

export default Instructor;
