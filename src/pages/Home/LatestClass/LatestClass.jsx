import React, { useEffect, useState } from 'react';
import Class from './Class';
import { Typewriter } from "react-simple-typewriter";


const LatestClass = () => {
    const [classes, setClasses] = useState([])
    const [showSeeAllButton, setShowSeeAllButton] = useState(true);

    useEffect(() =>{
        fetch("https://summer-camp-server-rimon0000.vercel.app/latestClasses")
        .then(res => res.json())
        .then(data => setClasses(data.slice(0, 3)))
    },[])

    const seeAllHandler = () =>{
            fetch("https://summer-camp-server-rimon0000.vercel.app/latestClasses")
            .then(res => res.json())
            .then(data => setClasses(data))
            setShowSeeAllButton(false)
    }
    // console.log(classes)

    return (
        <div>
            <div className="mx-auto text-center my-8 space-y-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
                <Typewriter
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  delaySpeed={1000}
                  words={["Latest Classes", "New Arrivals"]}
                  className="font-heading"
                ></Typewriter>
              </h2>
              <p className="text-sm w-full md:w-3/4 lg:w-9/12 mx-auto text-slate-600">
                Stay updated with Real Champions Academy's latest classes. Our newly introduced courses are designed to give you cutting-edge training with a focus on excellence. Join now and be among the first to experience our latest offerings!
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    classes?.map(cls => <Class key={cls.id} cls ={cls}></Class>)
                }
            </div>
            <div className='text-center border-black'>
            {showSeeAllButton && (
                <button onClick={seeAllHandler}
                  className="px-7 py-5 flex mx-auto items-center mt-6 font-semibold text-white bg-gradient-to-r bg-[#955E42] rounded-3xl tracking-wide shadow-lg hover:from-slate-200 hover:to-slate-800 transition-all duration-1000"
                >
                  See All Classes
                </button>
             )}
            </div>
            
        </div>
    );
};

export default LatestClass;