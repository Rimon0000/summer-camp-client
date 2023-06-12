import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Class = ({item}) => {
    const {_id, class_img, class_name, instructor_name, available_seats, price} = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = (item) =>{
        console.log(item)
        if(user && user.email){
          const cartItem = {classItemId: _id, class_img, class_name, instructor_name, available_seats, price, email: user.email}
          fetch('http://localhost:5000/carts',{
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(cartItem)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
            //   refetch()  //refetch cart to update the number of items of the cart
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class added on the cart.',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
        }
        else{
          Swal.fire({
            title: 'Please login to Select the class.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now.'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
        }
  
      }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={class_img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{class_name}</h2>
            <p className='font-semibold'>Instructor Name: {instructor_name}</p>
            <div className='flex font-semibold'>
            <p>Available Seats: {available_seats}</p>
            <p>price: ${price}</p>
            </div>
            <div className="card-actions mt-2">
              <button onClick={() => handleAddToCart(item)}  className="btn btn-outline btn-primary">Select</button>
            </div>
          </div>
        </div>
    );
};

export default Class;