import React from 'react';
import { FaBeer, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (

        <div className='my-10 bg-base-200 rounded-lg pb-5 lg:px-20' id='contact'>
            <div className='mx-auto text-center my-8'>
            <h2 className='text-3xl font-semibold uppercase py-2'>
              Contact us
            </h2>
            <p>Let's Work Together.</p>
            </div>
            {/* data-aos="fade-right" data-aos-duration="2000"
            data-aos="fade-left" data-aos-duration="2000" */}
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                <div className='bg-slate-800 rounded-lg p-10'>
                   <form className='m-0'>
                   <div className="form-control">
                     <input type="text" placeholder="Name" className="input input-bordered bg-white text-black rounded-lg" required/>
                   </div>
                   <div className="form-control">
                     <input type="email" placeholder="Email" className="input input-bordered bg-white text-black rounded-lg" required/>
                   </div>
                   <div className="form-control">
                     <textarea className="textarea textarea-bordered bg-white text-black rounded-lg" placeholder="Write Your Message" required></textarea>
                   </div>
                   <input className='btn btn-primary mt-3 text-white' type="submit" value="Send Message" />
                   </form>
                </div>

                <div className='bg-black rounded-lg text-white' >
                    <h2 className='text-center text-2xl font-semibold m-5 p-5 border-b-2 border-gray-500 mx-auto'>Contact Info</h2>
                    <div className='flex gap-3 ml-10 pt-5 text-xl'>
                        <div className='rounded-full'><FaMailBulk></FaMailBulk></div>
                        <p><span className='font-semibold'>Email: </span>rimonron.ad@gmail.com</p>
                    </div>
                    <div className='flex gap-3 ml-10 pt-5 text-xl'>
                        <FaPhoneAlt></FaPhoneAlt>
                        <p><span className='font-semibold'>Phone: </span>+880 1306-260913</p>
                    </div>
                    <div className='flex gap-3 ml-10 pt-5 text-xl'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <p><span className='font-semibold'>Address: </span> Noakhali, Bangladesh</p>
                    </div>   
                </div>
            </div> 
        </div>
    );
};

export default Contact;