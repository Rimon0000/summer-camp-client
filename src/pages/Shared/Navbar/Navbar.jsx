import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { Fade } from "react-awesome-reveal";
import "./Navbar.css"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/instructors'>Instructors</Link>
      </li>
      <li>
        <Link to='/classes'>Classes</Link>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to={
                isAdmin
                  ? "dashboard/manageUser"
                  : isInstructor
                  ? "dashboard/addClass"
                  : "dashboard/mycart"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
      <li className="addcart">
        <Link to='/dashboard/mycart'>
          <button className='btn btn-sm'>
            <FaShoppingCart />
            <div className='badge badge-secondary ml-1'>
              +{cart?.length || 0}
            </div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogout} className='btn btn-ghost logout-btn'>
            LogOut
          </button>
        </>
      ) : (
        <>
          <li className="lg:ml-20">
            <Link to='/login'>Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className='navbar fixed z-10 bg-opacity-30 bg-gray-800 lg:text-white'>
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
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navOptions}
            </ul>
          </div>
          <Link to='/' className='mr-3'>
            <img className='w-15 h-14 rounded-lg lg:ml-5' src={logo} alt='' />
          </Link>
          <a className='btn btn-ghost normal-case text-xl'>Real Champions</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
        </div>
        {user && (
          <div className='pr-16'>
            <div className='w-12 rounded-full'>
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
    </>
  );
};

export default Navbar;
