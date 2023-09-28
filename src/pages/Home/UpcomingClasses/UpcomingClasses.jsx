import React from 'react';
import golf from "../../../assets/upcoming/golf.jpg"
import chess from "../../../assets/upcoming/chess.jpg"
import running from "../../../assets/upcoming/running.jpg"
import cycling from "../../../assets/upcoming/cycling.jpg"
import rugby from "../../../assets/upcoming/rugby.jpg"
import karate from "../../../assets/upcoming/karate.jpg"

const UpcomingClasses = () => {
    return (
        <div>
            <div className='mx-auto text-center md:w-4/12 my-8'>
              <h2 className='text-3xl font-semibold uppercase py-4'>
                Upcoming Classes
              </h2>
              <p>if you are looking for any course, you can keep eyes of these courses.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-5 my-5 mx-10'>
            <div className='card w-80 bg-base-100 shadow-xl' data-aos="zoom-in-up" data-aos-duration="3000">
              <figure>
                <img src={golf} alt='Golf' />
              </figure>
              <div className='card-body'>
                <h2>Class Name: Golf</h2>
                <p>Price: ৳5,000</p>
              </div>
            </div>

            <div className='card w-80 bg-base-100 shadow-xl' data-aos="zoom-in-up" data-aos-duration="3000">
              <figure>
                <img src={rugby} alt='Rugby' />
              </figure>
              <div className='card-body'>
                <h2>Class Name: Rugby Union</h2>
                <p>Price: ৳7,000</p>
              </div>
            </div>

            <div className='card w-80 bg-base-100 shadow-xl' data-aos="zoom-in-up" data-aos-duration="3000">
              <figure>
                <img src={karate} alt='Karate' />
              </figure>
              <div className='card-body'>
                <h2>Class Name: Karate</h2>
                <p>Price: ৳10,000</p>
              </div>
            </div>

            <div className='card w-80 bg-base-100 shadow-xl' data-aos="zoom-in-up" data-aos-duration="3000">
              <figure>
                <img src={cycling} alt='Cycling' />
              </figure>
              <div className='card-body'>
                <h2>Class Name: Cycling</h2>
                <p>Price: ৳8,000</p>
              </div>
            </div>

            <div className='card w-80 bg-base-100 shadow-xl' data-aos="zoom-in-up" data-aos-duration="3000">
              <figure>
                <img src={running} alt='Running' />
              </figure>
              <div className='card-body'>
                <h2>Class Name: Running</h2>
                <p>Price: ৳7,000</p>
              </div>
            </div>

            <div className='card w-80 bg-base-100 shadow-xl' data-aos="zoom-in-up" data-aos-duration="3000">
              <figure>
                <img src={chess} alt='Chess' />
              </figure>
              <div className='card-body'>
                <h2>Class Name: Chess</h2>
                <p>Price: ৳4,000</p>
              </div>
            </div>
            </div>
            
        </div>
    );
};

export default UpcomingClasses;