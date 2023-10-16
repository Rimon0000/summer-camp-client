import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/logo images/img1.jpg"
import img2 from "../../../assets/logo images/img2.jpg"
import img3 from "../../../assets/logo images/img3.jpg"
import img5 from "../../../assets/logo images/img5.jpg"
import img6 from "../../../assets/logo images/img6.jpg"
import img7 from "../../../assets/logo images/img7.jpg"
import img8 from "../../../assets/logo images/img8.jpg"
import img9 from "../../../assets/logo images/img9.jpg"
import img10 from "../../../assets/logo images/img10.jpg"

const PartnerCompany = () => {
    return (
        <div className='my-7'>
            <h2 className='text-center text-4xl font-bold pt-5 px-5 pb-2'>Our Partner Company</h2>
            <p className='text-center font-semibold mb-5 text-stone-800'>Check out our sponsor company</p>
            <div className='d-flex'>
              <Marquee className='text-danger' speed={100}>
              <div className="card w-96 bg-base-100 shadow-xl">
                      <figure><img src={img1} alt="Shoes" /></figure>
                       <div className="mt-3">
                       <h2 className="text-center font-bold">BUGATTI</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
                       <figure><img src={img2} alt="Shoes" /></figure>
                       <div className="mt-3">
                       <h2 className="text-center font-bold">Scarlet Witch</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
                       <figure><img src={img3} alt="Shoes" /></figure>
                       <div className="mt-3">
                       <h2 className="text-center font-bold">McDonald's</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
                       <figure><img src={img5} alt="Shoes" /></figure>
                       <div className="mt-3">
                       <h2 className="text-center font-bold">Mercedes-Benz</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
                       <figure><img src={img6} alt="Shoes" /></figure>
                       <div className="mt-3">
                       <h2 className="text-center font-bold">DONUTS</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
                        <figure><img src={img7} alt="Shoes" /></figure>
                        <div className="mt-3">
                       <h2 className="text-center font-bold">Zalando</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
                       <figure><img src={img8} alt="Shoes" /></figure>
                       <div className="mt-3">
                       <h2 className="text-center font-bold">PRADA</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl ml-14">
                        <figure><img src={img9} alt="Shoes" /></figure>
                        <div className="mt-3">
                       <h2 className="text-center font-bold">BMW</h2>
                      </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-14">
                       <figure><img src={img10} alt="Shoes" /></figure>
                       <div className="mt-3">
                       <h2 className="text-center font-bold">Toyota</h2>
                      </div>
                </div>
              </Marquee>
            </div> 
        </div>
    );
};

export default PartnerCompany;