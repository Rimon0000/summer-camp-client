import React from "react";

const OurServices = () => {
  return (
    <div className="py-16 p-5">
      <h1 className="text-3xl font-bold pb-10 text-center">Why are we the best!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div>
          <div className="flex items-center gap-3  py-5"  data-aos="zoom-out">
            <div>
              <img className="w-20 bg-white lg:p-4 rounded-[50%]" src={"https://i.ibb.co/Kbg3LMH/field.jpg"} alt="" />
            </div>
            <div>
              <p className="font-bold pb-2">Training Grounds</p>
              <p className="font-semibold text-gray-400">We have personal training ground.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-5 "  data-aos="zoom-out">
            <div>
              <img className="w-28 bg-white lg:p-4 rounded-[50%]" src={"https://i.ibb.co/ggT7Sx7/cricket-2.jpg"} alt="" />
            </div>
            <div>
              <p className="font-bold pb-2">Professional Coach</p>
              <p className="font-semibold text-gray-400">Our team includes a wonderful team of specialists.</p>
            </div>
          </div>
        </div>
        <div  className=" rounded-full lg:mx-5 " data-aos="flip-down">
            <img className="lg:w-80" src="https://i.ibb.co/HrTCSh0/sports.jpg" alt="" />
        </div>
        <div className="ml-2">
          <div className="flex items-center gap-3 py-2"  data-aos="zoom-out">
            <div>
              <img className="w-24 bg-white p-4 rounded-[50%]" src={"https://i.ibb.co/PFqzcrR/giftbox.png"} alt="" />
            </div>
            <div>
              <p className="font-bold pb-2">Affordable Price</p>
              <p className="font-semibold text-gray-400">Prices are reasonable and we provide scholerShip for talented students</p>
            </div>
          </div>
          <div className="flex items-center gap-3 py-5"  data-aos="zoom-out">
            <div>
              <img className="w-20 bg-white p-4 rounded-[50%]" src={"https://i.ibb.co/56kMxjW/tour-guide.png"} alt="" />
            </div>
            <div>
              <p className="font-bold pb-2">Flexible Scheduling</p>
              <p className="font-semibold text-gray-400">We have specialist to set your Schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
