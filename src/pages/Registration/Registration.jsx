import React, { useContext, useState } from 'react';
import signUp from "../../assets/sign/signup.jpg"
import { Link, json, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Registration = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

    const onSubmit = (data) =>{
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            updateUserProfile(data.name, data.photoURL)
            .then(() =>{
              console.log('user profile info updated')
              const saveUser = {name: data.name, email: data.email, photoURL: data.photoURL}
              fetch("https://summer-camp-server-rimon0000.vercel.app/users",{
                method: "POST",
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
              })
              .then(res => res.json())
              .then(data =>{
                if(data.insertedId){
                      reset()
                    Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
              })
              setError('')
              navigate("/")
                }
              })

            })
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)

        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2">
              <img className='w-3/4' src={signUp} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='m-0'>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className='text-red-600'>Name is required</span>}
                    </div>
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
                      <input type="password" {...register("password",{ required: true,
                           minLength: 6, 
                           maxLength: 20,
                           pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/
                            })} name='password' placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one uppercase and one special character.</p>}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
                      </label>
                      <input type="password" {...register("confirm", { required: true })} placeholder="Confirm Password" name="confirm" className="input input-bordered" required />
                      {errors.confirm && <span className='text-red-600'>confirm Password is required</span>}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                        {errors.photoURL && <span className='text-red-600'>photoURL is required</span>}
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <input type="submit" className="btn btn-primary" value="SignUp" />
                    </div>
                    <div>
                    <p className='text-orange-700'>{success}</p>
                    <p className='text-lime-500'>{error}</p>
                    </div>
                </form>
                <p className="my-4 text-center">Already Have an Account? <Link className="text-orange-600 font-bold" to="/login">Login</Link></p>
              </div>
            </div>
        </div>
    </div>
    );
};

export default Registration;