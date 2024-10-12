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
      src: 'https://i.ibb.co.com/k2j2Snv/img1-1-1.webp',
      title: 'State-of-the-Art Facilities',
      additionalText: 'Our sports school boasts state-of-the-art facilities designed to enhance training and performance. From modern training equipment to specialized practice areas, we provide an environment that fosters excellence. Explore our facilities and see where champions are made!',
      button: 'Take a Tour'
    },
    {
      src: 'https://i.ibb.co.com/tPdg24Q/img2-1.webp',
      title: 'Community and Team Spirit',
      additionalText: 'Join a vibrant community of athletes who share your passion for sports. At our school, we foster a culture of teamwork and camaraderie, helping students develop not just their skills, but also lifelong friendships. Become part of something bigger—train with us!',
      button: 'Get Started'
    },
    {
      src: 'https://i.ibb.co.com/MN4YPYV/img3-1.webp',
      title: 'Train Like a Champion',
      additionalText: 'At our sports school, we believe in cultivating the champion mindset. Our expert coaches provide personalized training programs tailored to enhance your skills, stamina, and strategic thinking. Join us to unlock your full potential and excel in your chosen sport. ',
      button: 'Join Now'
    },
    {
      src: 'https://i.ibb.co.com/1K1xz3x/img4-1.webp',
      title: 'Expert Coaching Staff',
      additionalText: ' Our team of experienced coaches brings a wealth of knowledge and expertise across various sports. They are dedicated to mentoring students of all ages, ensuring each athlete receives the guidance they need to succeed. Experience the difference of training under industry professionals',
      button: 'Meet Our Coaches'
    },
  ];

  return (
    <div className='h-[300px] lg:h-[600px]'>
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
              <img className='w-full h-full object-cover' src={slide.src} alt={`Slide ${index + 1}`} />
              <div className="absolute top-[11rem] left-[9rem] text-white">
                <h1 className="text-2xl font-bold">{slide.title}</h1>
                <p className="mt-2 text-lg">{slide.additionalText}</p>
                <button>{slide.button}</button>
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
