import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Arrow from './Arrow';

const Services4_Images = ({ Word, Data }) => {
  const Number = []

  const FN = () => {

    for (let index = 1; index <= Data; index++) {
      Number.push(index)

    }
  }
  FN()

  return (
    <div className='Services4_Images'>
      <div className='Swiper_Image'>
        <img alt=' ' src={`../Services/Services4/${Word}.svg`} className='Swiper_Words' />

        <Swiper
          spaceBetween={50}
          slidesPerView={3}>
          {
            Number?.map((i) => (
              <>
                <SwiperSlide>
                  <img src={`../Services/Services4/Swiper/${Word}/${Word.slice(0,1)}${i}.png`} alt='' className='Swiper_image1' />
                </SwiperSlide>
              </>
            ))

          }


        </Swiper>
      </div>
      <Arrow />

    </div>
  )
}

export default Services4_Images