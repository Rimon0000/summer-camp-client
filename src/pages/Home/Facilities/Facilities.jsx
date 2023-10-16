import React from 'react';
import "./Facilities.css"

const Facilities = () => {
    return (
        <div className='px-5'>
            <div className='mx-auto text-center md:w-4/12 my-8'>
            <h2 className='text-3xl font-semibold uppercase py-2'>
              Facilities
            </h2>
            <p>Facilities of our academy.</p>
            </div>

            <div className='grid lg:grid-cols-4 gap-5'>
                <div className='relative zoomable-image '>
                    <img src={"https://i.ibb.co/gZKPRm9/swim.jpg"} alt=""/>
                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                       <div className="text-white pl-12 pt-5">
                       <p className="uppercase">swimming complex</p>
                       </div>
                    </div>
                </div>
                <div className='relative zoomable-image'>
                    <img src={"https://i.ibb.co/8zvm2j7/restroom.jpg"} alt="" />
                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                       <div className="text-white pl-12 pt-5">
                       <p className="uppercase">Rest Room</p>
                       </div>
                    </div>
                </div>
                <div className='relative zoomable-image'>
                    <img src={"https://i.ibb.co/Px05fJG/canteen.jpg"} alt="" />
                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                       <div className="text-white pl-12 pt-5">
                       <p className="uppercase">Healthy food canteen</p>
                       </div>
                    </div>
                </div>
                <div className='relative zoomable-image'>
                    <img src={"https://i.ibb.co/tDkkGGR/coach.jpg"} alt="" />
                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                       <div className="text-white pl-12 pt-5">
                       <p className="uppercase">professional coach</p>
                       </div>
                    </div>
                </div>
                <div className='relative zoomable-image'>
                    <img src={"https://i.ibb.co/886f9bK/gym.jpg"} alt="" />
                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                       <div className="text-white pl-12 pt-5">
                       <p className="uppercase">the gym</p>
                       </div>
                    </div>
                </div>
                <div className='relative zoomable-image'>
                    <img src={"https://i.ibb.co/NL6HBgL/recovery.jpg"} alt="" />
                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                       <div className="text-white pl-12 pt-5">
                       <p className="uppercase">player recovery</p>
                       </div>
                    </div>
                </div>
                <div className='relative zoomable-image'>
                    <img src={"https://i.ibb.co/mbbvjDM/indoor.jpg"} alt="" />
                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                       <div className="text-white pl-12 pt-5">
                       <p className="uppercase">outdoor pitches</p>
                       </div>
                    </div>
                </div>
                <div className='relative zoomable-image'>
                    <img src={"https://i.ibb.co/QkPz6j5/outdoor.jpg"} alt="" />
                    <div className="absolute h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                       <div className="text-white pl-12 pt-5">
                       <p className="uppercase">indoor pitches</p>
                       </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Facilities;