import React from "react";
import "./Gallery.css"
import image1 from "../../../assets/gallery/img1.jpg"
import image2 from "../../../assets/gallery/img2.jpg"
import image3 from "../../../assets/gallery/img3.jpg"
import image4 from "../../../assets/gallery/img4.jpg"
import image5 from "../../../assets/gallery/img5.jpg"
import image6 from "../../../assets/gallery/img6.jpg"

const Gallery = () => {
  const images = [
    {
        src: image1,
        alt: "",
      },
      {
        src: image2,
        alt: "",
      },
      {
        src: image3,
        alt: "",
      },
      {
        src: image4,
        alt: "",
      },
      {
        src: image5,
        alt: "",
      },
      {
        src: image6,
        alt: "",
      },
  ];

  return (
    <div className="mb-5 mx-12">
           <div className='mx-auto text-center my-8'>
                <h2 className='text-3xl font-semibold uppercase py-2'>
                    Gallery
                </h2>
                <p>See our daily activities</p>
            </div>
        <div className="w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 gap-8 columns-3">
          {images.map((image) => (
            <img className="rounded-lg zoomable-image"
              key={image.src}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
    </div>
  );
};

export default Gallery;