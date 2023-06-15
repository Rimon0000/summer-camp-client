import React, { useContext } from 'react';
import useClasses from '../../../hooks/useClasses';
import { AuthContext } from '../../../providers/AuthProvider';

const ManageClasses = () => {
    const [classes] = useClasses()
    const {_id, image, class_name, instructor_name, available_seats, price} = classes;
    const {user} = useContext(AuthContext)
    return (
        <div className='w-full'>
        <div className='text-center my-8'>
            <h2 className='text-3xl uppercase py-4'>Manage Classes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                classes.map((cls, index) => <tr key={cls._id}>
                    <th>{index + 1}</th>
                    <td><img src={cls.image} alt="" /></td>
                    <td>{cls.class_name}</td>
                    <td>{cls.instructor_name}</td>
                    <td>{cls.instructor_email}</td>
                    <td>{cls.available_seats}</td>
                    <td>{cls.price}</td>
                    <td>
                        <button className="btn btn-outline btn-sm bg-orange-500 text-white">Approve</button>
                        <button className="btn btn-outline btn-sm bg-red-500 text-white">Deny</button>
                        <button className="btn btn-outline btn-sm bg-orange-500 text-white">Feedback</button>
                    </td>
                  </tr>)
              }
              
            </tbody>
          </table>
        </div>
    </div>
    );
};

export default ManageClasses;