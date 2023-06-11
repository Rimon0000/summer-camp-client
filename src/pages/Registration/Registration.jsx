import React, { useContext, useState } from 'react';
import signUp from "../../assets/sign/signup.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Registration = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

    const handleSignUp = (event) =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        const photo = form.photo.value
        console.log(name, email, password, confirm, photo)

        if(password.length < 6){
          setError('Password must be 6 characters or longer');
          return
        }
        else if (!/[A-Z]/.test(password)) {
          setError('Password should contain at least one capital letter');
          return
        } 
        else if (!/[!@#$%^&*()]/.test(password)) {
          setError('Password should contain at least one special character');
          return
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            updateUserProfile(name, photo)
            .then(() =>{
              console.log('user profile info updated')
              form.reset()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500
              })
              setError('')
              navigate("/")
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
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Name" name="name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="text" placeholder="email" name="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="Password" name="password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
                      </label>
                      <input type="password" placeholder="Confirm Password" name="confirm" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required/>
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