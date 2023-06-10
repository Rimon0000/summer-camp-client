import React from 'react';
import signUp from "../../assets/sign/signup.jpg"
import { Link } from 'react-router-dom';

const Registration = () => {

    const handleSignUp = (event) =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name, email, password, photo)

        // createUser(email, password)
        // .then(result => {
        //     const loggedUser = result.user
        //     console.log(loggedUser)
        //     setSuccess('User Sign Up successful.')
        //     setError(' ')
        //     form.reset()

        //     form.reset()
        //     updateUser(result.user, name, photo)
        //     console.log(result.user)
        // })
        // .catch(error =>{
        //     console.log(error)
        //     setError(error.message)

        // })
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
                      <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="text" placeholder="email" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="Password" name="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
                      </label>
                      <input type="password" placeholder="Confirm Password" name="confirm" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <input type="submit" className="btn btn-primary" value="SignUp" />
                    </div>
                    <div>
                    {/* <p className='text-orange-700'>{success}</p>
                    <p className='text-lime-500'>{error}</p> */}
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