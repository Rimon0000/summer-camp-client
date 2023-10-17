import React from 'react';
import about1 from "../../../assets/about/about1.jpg"
import about2 from "../../../assets/about/about2.jpg"

const About = () => {
    return (
        <div>
            <div className='mx-auto text-center px-10 mt-11'>
                <h2 className='text-3xl font-semibold uppercase py-2 mb-8'>
                    About Us
                </h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
                    <div className='rounded'>
                        <img className='w-3/4 rounded' src={about1} alt="" />
                        <img className='w-3/4 relative rounded left-36 bottom-28' src={about2} alt="" />
                    </div>
                    <div className=''>
                        <h2 className='text-2xl font-semibold mb-3'>Welcome to Real Champions</h2>
                        <p className='text-justify  px-2'>Welcome to our Real Champions Academy, a place where we are committed to nurturing talent and fostering excellence in every athlete who walks through our doors. 
                            Our experienced coaches are not just instructors; they are passionate about their respective sports and dedicated to helping athletes achieve their goals. 
                            With a tailored curriculum that offers sport-specific training programs, we address the unique demands of each discipline, 
                            ensuring comprehensive skill development. <br /> <br />
                            
                            Our Sports Coaching Academy is not just a place where athletes train; it's where champions are born and dreams come to life. 
                            We invite you to explore our range of programs and training opportunities, 
                            tailored to athletes of all ages and skill levels. Whether you're a budding talent looking to hone your skills or 
                            a seasoned athlete aspiring to reach new heights, we have the perfect program for you. 
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;