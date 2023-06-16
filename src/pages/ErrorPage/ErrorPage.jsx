import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error } = useRouteError()
  return (
    <div className="h-[100vh]">
      <main className="h-screen w-full flex flex-col justify-center items-center ">
        <img className="w-96" src="https://i.ibb.co/6X7NSJW/error.jpg" alt="Error Image" />
        
        <button className="btn btn-outline"><Link to="/">Go Home</Link></button>
        <p className='font-semibold my-5 pb-5'>
            {error?.message}
        </p>
      </main>
    </div>
  );
};

export default ErrorPage;
