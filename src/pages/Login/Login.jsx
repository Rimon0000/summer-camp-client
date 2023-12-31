import React, { useContext, useState } from 'react';
import abcd from "../../assets/login/abcd.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const {login, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };


    const onSubmit = (data) =>{

        login(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user 
            console.log(loggedUser)
            Swal.fire({
              title: 'User Login Successful.',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
            setError(' ')
            reset()
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
          const loggedUser = result.user 
          console.log(loggedUser)

          const saveUser = {name: loggedUser.displayName, email: loggedUser.email, photoURL: loggedUser.photoURL}
          fetch('https://summer-camp-server-rimon0000.vercel.app/users',{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
          .then(res => res.json())
          .then(() =>{
          navigate(from, { replace: true });

          setSuccess('User Login successful.')
          setError(' ')
    
        })
      })
    }

    return (
        <div className="hero min-h-screen bg-base-200 pt-20">
          <div className="hero-content flex-col lg:flex-row">
            <div className='w-1/2'>
                <img className='w-3/4' src={abcd} alt=""/>
              </div>
              <div className="card text-left flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                <h1 className="text-3xl text-center font-bold">Login</h1>
                  <form onSubmit={handleSubmit(onSubmit)} className='m-0'>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password", { required: true })} name="password" className="input input-bordered" required/>
                         <FaEye className="password-toggle mt-2" onClick={togglePasswordVisibility}></FaEye>
                         {errors.email && <span className='text-red-600'>Password is required</span>}
                      </div>
                      <div className="form-control mt-3">
                        <input type="submit" className="btn btn-primary" value="Login" />
                      </div>
                      <div>
                      <p className='text-orange-700'>{success}</p>
                      <p className='text-lime-500'>{error}</p>
                      </div>
                  </form>
                  <p className=" text-center">New to Real champions? <Link className="text-orange-600 font-bold" to="/registration">Sign Up</Link></p>
                  <div>
                  <Link><button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary"><FaGoogle className='mr-2 text-black'/> Google Login</button></Link>
                </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Login;