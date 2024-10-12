import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
            <Carousel>
                <div>
                    <img src="https://i.ibb.co.com/m9TXkxw/img1-1.webp" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/HzqtMrg/img2.webp" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/fDXgZHM/img3.webp" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/HhTC7z4/img4.webp" />
                </div>
        </Carousel>
    );
};

export default Banner;