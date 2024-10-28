import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import { IoArrowForwardSharp } from "react-icons/io5";


const About = () => {
    return (
        <div>
            <div className='mx-auto mt-16'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase py-2 mb-5 border-l-slate-700 border-l-4 pl-3' >   
                {/* data-aos="fade-right" data-aos-duration="5000" */}
                  <Typewriter
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    delaySpeed={1000}
                    words={["About Us", "Our Story", "Who We Are"]}
                    className="font-heading "
                  ></Typewriter>
                </h2>
                <div className='flex flex-col md:flex-row lg:flex-row gap-6 px-5'>
                    <div className='md:w-3/5 lg:w-3/5 p-1'>
                        <div className='lg:flex'>
                            <img className='lg:w-[55%] md:w-[80%] h-4/6 rounded' src="https://i.ibb.co.com/dG5qZyY/about2-1.webp" alt="" />
                            <img className='lg:w-[55%] md:w-[80%] h-4/6 rounded lg:relative lg:bottom-[30px] lg:right-[10%] mt-5 md:mt-5 lg:mt-0' src="https://i.ibb.co.com/G7N1x7d/about1-1.webp" alt="" />
                        </div>
                        <div className='font-bold text-2xl'>
                            <p className='lg:relative lg:bottom-[3.5rem] lg:left-[19rem] xl:relative xl:bottom-16 xl:left-96 mt-3 md:mt-2 lg:mt-0 xl:mt-0'><span className='text-blue-600'>10+</span> years <br /> of experience</p>
                        </div>
                    </div>

                    <div className='md:w-2/5 lg:w-2/5'>
                        <h2 className='text-2xl font-bold mb-1'>Welcome to Real Champions</h2>
                        <p className='text-justify text-sm'>
                            Our Sports Coaching Academy is not just a place where athletes train; it's where champions are born and dreams come to life. 
                            We invite you to explore our range of programs and training opportunities, 
                            tailored to athletes of all ages and skill levels.
                        </p>

                        <div className='mt-3'>
                        <div>
                          <h2 class="text-xl font-bold text-slate-600">-Our Mission</h2>
                          <p class="text-sm ps-4">
                            To inspire and train athletes of all ages and skill levels by providing top-notch facilities. We are dedicated to developing talent and encouraging a love for sports.
                          </p>
                        </div>
                        <div>
                          <h2 class="text-xl font-bold text-slate-600">-Our Values</h2>
                          <p class="text-sm ps-4">
                            We believe in teamwork, perseverance, and sportsmanship. Our academy fosters a supportive and inclusive environment where every athlete is valued and empowered to achieve their potential.
                          </p>
                        </div>
                        <div>
                          <h2 class="text-xl font-bold text-slate-600">Our Goal</h2>
                          <p class="text-sm ps-4">
                            Our goal is to become a leading sports academy, recognized for our commitment to excellence in training and athlete development. We strive to build champions on the field.
                          </p>
                        </div>
                        </div>


                        <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-between items-center gap-1 mt-4'>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <img className='w-12 h-11 rounded-full' src="https://i.ibb.co.com/3rdxJ3Y/rimon-about.webp" alt="" />
                                </div>
                                <div>
                                    <h3 className='font-bold text-sm'>Rimon Ron</h3>
                                    <p className='text-xs font-medium'>Founder of Company</p>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-primary btn-sm text-[13px] bg-slate-800 hover:bg-slate-600 rounded-3xl'>Read More <IoArrowForwardSharp/></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;