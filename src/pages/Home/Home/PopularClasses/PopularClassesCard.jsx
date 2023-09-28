import React from "react";

const PopularClassesCard = ({ cls }) => {
  const {image, instructor_name, class_name, price, available_seats, students, _id,} = cls;
  return (
    <div className='card w-80 bg-base-100 shadow-xl'>
      <figure>
        <img src={image} alt=''/>
      </figure>
      <div className='card-body'>
        <h2 className='text-2xl font-bold'>{class_name}</h2>
        <h2 className="font-semibold">Instructor: {instructor_name}</h2>
        <p>Available Seat: {available_seats}</p>
        <p>Enroll Student: {students}</p>
        <p>Price: ৳{price}</p>
      </div>
    </div>
  );
};

export default PopularClassesCard;
