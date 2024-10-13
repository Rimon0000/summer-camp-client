import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const slides = [
    {
      src: 'https://i.ibb.co.com/0MvtyBV/img7-1.webp',
      title: 'State-of-the-Art Facilities',
      additionalText: 'From modern training equipment to specialized practice areas, we provide an environment that fosters excellence. Explore our facilities and see where champions are made!',
      button: 'Take a Tour'
    },
    {
      src: 'https://i.ibb.co.com/rFtWgP0/img5.webp',
      title: 'Community and Team Spirit',
      additionalText: 'Join a vibrant community of athletes who share your passion for sports. Become part of something bigger—train with us!',
      button: 'Get Started'
    },
    {
      src: 'https://i.ibb.co.com/thkWyts/img4-1-1.webp',
      title: 'Train Like a Champion',
      additionalText: 'At our sports school, we believe in cultivating the champion mindset. Join us to unlock your full potential and excel in your chosen sport. ',
      button: 'Join Now'
    },
    {
      src: 'https://i.ibb.co.com/dDdJv7M/img1-2.webp',
      title: 'Expert Coaching Staff',
      additionalText: ' Our team of experienced coaches brings a wealth of knowledge and expertise across various sports. Experience the difference of training under industry professionals',
      button: 'Meet Our Coaches'
    },
  ];

  return (
    <div className='h-[350px] md:h-[400px] lg:h-[630px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img className='w-full h-full object-cover object-center' src={slide.src} alt={`Slide ${index + 1}`} />
              <div className="absolute top-[8rem] sm:top-[7rem] md:top-[10rem] lg:top-[11rem] left-[2rem] sm:left-[3rem] md:left-[4rem] text-start px-3 sm:px-8 md:px-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <h1 className="mb-3 text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white lg:w-5/6">{slide.title}</h1>
                <p className="mb-8 text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-xs sm:text-sm lg:text-base  drop-shadow-2xl">{slide.additionalText}</p>
                <button className='btn btn-sm py-5 text-center flex place-content-center font-heading font-bold rounded-3xl text-xs border-[#8cbd51] hover:bg-[#955E42] hover:border-[#955E42] sm:px-4 md:px-6'>
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
