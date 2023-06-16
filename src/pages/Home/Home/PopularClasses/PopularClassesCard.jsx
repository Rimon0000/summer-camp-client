import React from "react";

const PopularClassesCard = ({ cls }) => {
  const {
    image,
    instructor_name,

    class_name,
    price,
    available_seats,
    students,
    _id,
  } = cls;
  return (
    <div className='card border  w-full  '>
      <figure className='p-10'>
        {" "}
        <img src={image} alt='' className='rounded-xl ' />
      </figure>
      <div className='card-body items-center   '>
        <h2 className=' text-center  text-2xl font-bold'>{class_name}</h2>
        <h2>Instructor: {instructor_name}</h2>
        <p>Available Seat: {available_seats}</p>
        <p>Enroll Student: {students}</p>
        <p>Price: BDT {price}</p>
      </div>
    </div>
  );
};

export default PopularClassesCard;
