import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const Class = ({ item }) => {
  const { _id, image, class_name, instructor_name, available_seats, price } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        classItemId: _id,
        image,
        class_name,
        instructor_name,
        available_seats,
        price,
        email: user.email,
      };
      fetch("https://summer-camp-server-rimon0000.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //refetch cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to Select the class.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now.",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className='card w-80 bg-base-100 shadow-xl'>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{class_name}</h2>
        <p className='font-bold'>Instructor Name: <span className="semibold">{instructor_name}</span></p>
        <p className="font-bold">Available Seats: <span className="semibold">{available_seats}</span></p>
        <p className="font-bold">price: <span className="text-sm">${price}</span></p>
        <div className='card-actions'>
          {isAdmin || isInstructor ? (
            <>
              <button
                disabled
                onClick={() => handleAddToCart(item)}
                className='btn btn-outline btn-primary'
              >
                Select
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleAddToCart(item)}
                className='btn btn-outline btn-primary border-solid'
              >
                Select
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Class;
