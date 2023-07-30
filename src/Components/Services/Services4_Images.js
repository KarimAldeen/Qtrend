import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Services4_Images = () => {
  return (
    <div className='Services4_Images'>
      <div className='Swiper_Image'>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <img  src='../Services/Services4/Swiper/Swiper_image1.png' alt='' className='Swiper_image1' />

      </SwiperSlide>
      <SwiperSlide>
      <img  src='../Services/Services4/Swiper/Swiper_image1.png' alt='' className='Swiper_image1' />

      </SwiperSlide>
      <SwiperSlide>
      <img  src='../Services/Services4/Swiper/Swiper_image1.png' alt='' className='Swiper_image1' />

      </SwiperSlide>
      <SwiperSlide>
      <img  src='../Services/Services4/Swiper/Swiper_image1.png' alt='' className='Swiper_image1' />

      </SwiperSlide>
    </Swiper>
      </div>
    <img  src='../Services/Services4/Arrow.svg' alt='' className='Arrow' />

    </div>
  )
}

export default Services4_Images