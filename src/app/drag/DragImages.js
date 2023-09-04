import React from 'react'
import { BaseURLImage } from '../../api/config'

const DragImages = ({data}) => {
  return (
            data?.map((img) => (
                
                  <SwiperSlide>
                    <img src={BaseURLImage + img?.path} alt='' className='Swiper_image1' />
                  </SwiperSlide>
                
              ))
    )
}

export default DragImages