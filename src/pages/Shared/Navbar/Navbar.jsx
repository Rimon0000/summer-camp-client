import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const activeLink ="text-[#83b446] font-bold underline underline-offset-8 text-base flex items-center font-heading";
  const deActiveLink ="transition-all font-semibold hover:underline underline-offset-8 hover:text-[#955E42] flex items-center  font-heading";


  //handle logout
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <NavLink
        to="/"
        title="Home"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        Home
      </NavLink>
      <NavLink
        to="/classes"
        title="Classes"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        Classes
      </NavLink>
      <NavLink
        to={
          isAdmin
            ? "dashboard/manageUser"
            : isInstructor
            ? "dashboard/addClass"
            : "dashboard/mycart"
        }
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/instructors"
        title="Instructors"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        Instructors
      </NavLink>

      <NavLink to='/dashboard/mycart'  className={({ isActive }) => (isActive ? activeLink : deActiveLink)}>
        <button className='btn btn-sm mt-[-1px]'>
            <FaShoppingCart className=""></FaShoppingCart>
          <div className='badge badge-secondary'>
              +{cart?.length || 0}
            </div>
        </button>
      </NavLink>

      {user ? (
        <>
          <button onClick={handleLogout} className='rounded-3xl logOut-btn mt-[-1px]'>
            LogOut
          </button>
        </>
      ) : (
        <>
          <button className="rounded-3xl primary-btn mt-[-1px]">
            <NavLink to='/login'>Login</NavLink>
          </button>
        </>
      )}
    </>
  );


  

  return (
      <div className='navbar fixed top-0 z-50 bg-base-100 shadow-md font-heading px-12 h-[80px]'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 z-10 p-6 shadow w-52 space-y-3 bg-[#1A1A1A] text-gray-200 rounded-lg'
            >
              {navOptions}
            </ul>
          </div>
          <NavLink to='/' className='flex gap- items-center text-[#955E42]'>
            <img className='w-12 rounded-lg' src="https://i.ibb.co.com/1X1MCnJ/logo-removebg-preview.webp" alt='' />
            <a className='btn btn-ghost normal-case text-xl font-bold '>Real Champions</a>
          </NavLink>
        </div>
        <div className='navbar-center hidden lg:flex items-center gap-12'>
          <ul className='menu menu-horizontal px-1 space-x-8 flex'>{navOptions}</ul>
        </div>
        {user && (
          <div className='ml-[150px] md:ml-[150px] lg:ml-[1px]'>
            <div className='w-10 rounded-full'>
              <img
                className='rounded-full'
                src={user?.photoURL}
                data-toggle='tooltip'
                data-placement='top'
                title={user?.displayName}
              />
            </div>
          </div>
        )}
      </div>
  );
};

export default Navbar;
