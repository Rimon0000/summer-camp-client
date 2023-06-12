import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { FaChalkboardTeacher, FaHome, FaShoppingCart, FaThLarge, FaWallet } from 'react-icons/fa';

const Dashboard = () => {
  const [cart] = useCart()
  const isAdmin = false
  const isInstructor = false
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
    
          { isAdmin ? <>
            <li><NavLink to="/dashboard/mycart"><FaThLarge></FaThLarge> Manage Classes
            <span className="badge badge-secondary ml-1">+${cart?.length || 0}</span></NavLink>
            </li>
            <li><NavLink to="/enrollclass"><FaThLarge></FaThLarge> Manage Users</NavLink></li>
          </> : 
          isInstructor ?
          <>
            <li><NavLink to="/dashboard/mycart"><FaChalkboardTeacher></FaChalkboardTeacher> Add Class
            <span className="badge badge-secondary ml-1">+${cart?.length || 0}</span></NavLink>
            </li>
            <li><NavLink to="/enrollclass"><FaChalkboardTeacher></FaChalkboardTeacher>My Classes</NavLink></li>
          </> : <>
          <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Selected Classes
            <span className="badge badge-secondary ml-1">+${cart?.length || 0}</span></NavLink>
          </li>
          <li><NavLink to="/enrollclass"><FaWallet></FaWallet> My Enrolled Classes</NavLink></li>
          </>
            
          }
    
          <div className='divider'></div>
          <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
    
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;