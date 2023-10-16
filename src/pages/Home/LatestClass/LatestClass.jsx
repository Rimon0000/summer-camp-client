import React, { useEffect, useState } from 'react';
import Class from './Class';
import "./LatestClass.css"


const LatestClass = () => {
    const [classes, setClasses] = useState([])
    const [showSeeAllButton, setShowSeeAllButton] = useState(true);

    useEffect(() =>{
        fetch("http://localhost:5000/latestClasses")
        .then(res => res.json())
        .then(data => setClasses(data.slice(0, 3)))
    },[])

    const seeAllHandler = () =>{
            fetch("http://localhost:5000/latestClasses")
            .then(res => res.json())
            .then(data => setClasses(data))
            setShowSeeAllButton(false)
    }
    console.log(classes)

    return (
        <div>
            <div className='mx-auto text-center my-8'>
                <h2 className='text-3xl font-semibold uppercase py-2'>
                    Latest Classes
                </h2>
                <p >check out our latest classes</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 my-5 mx-auto text-center lg:mx-10 mt-5'>
                {
                    classes?.map(cls => <Class key={cls.id} cls ={cls}></Class>)
                }
            </div>
            <div className='text-center border-black'>
            {showSeeAllButton && (
              <button onClick={seeAllHandler} className='btn btn-outline-primary text-center border-black'>See All classes</button>
             )}
            </div>
            
        </div>
    );
};

export default LatestClass;