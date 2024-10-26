import React from "react";
import { IoAccessibilityOutline, IoBookmarkOutline, IoManOutline, IoPricetagsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const PopularClassesCard = ({ cls }) => {
  const {image, instructor_name, class_name, price, available_seats, students, _id,} = cls;
  return (
    <div className='card bg-base-100 border transition-all p-3 duration-300 rounded-md lg:hover:-translate-y-2 hover:border-blue-500'>
      <figure >
        <img className="hover:scale-125 duration-300 h-[230px]" src={image} alt=''/>
      </figure>
      <div className='px-5 py-3 space-y-2'>
        <h2 className='text-2xl font-bold'>{class_name}</h2>
        <h3 className="flex items-center gap-2">
          <IoManOutline />
          <span className="font-bold">Instructor:</span> {instructor_name}
        </h3>
        <p className="flex items-center gap-2">
          <IoBookmarkOutline />
          <span className="font-bold">Available Seat:</span> {available_seats}
        </p>
        <p className="flex items-center gap-2">
          <IoAccessibilityOutline />
          <span className="font-bold">Enroll Student:</span> {students}
        </p>
        <p className="flex items-center gap-2">
          <IoPricetagsOutline />
          <span className="font-bold">Price:</span>৳ {price}
        </p>
        <NavLink to="/classes" className="text-center">
          <button
            className="btn card-btn w-full mt-5"
          >
            Go to Classes
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default PopularClassesCard;
