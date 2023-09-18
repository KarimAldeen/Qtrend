import React from 'react'
import ProductCard from './ProductCard'
import Main_Paper from '../mhmad/Main_Paper'
import Card from '../mhmad/Card'
import { Carousel } from 'react-responsive-carousel'
import ProductCardNew from '../Print/ProductCardNew'

import { data } from './data/Products'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { BaseURLImage } from '../../api/config'
import Arrow from '../Services/Arrow'
function CategoryHoemSectionWithProduct({color , index , products , per_page}) {
    const is_odd = index %2 ==1 
    
  return (
    <>
    <div style={{background:is_odd? "#EDF1F4" :color , display:products?.length == 0 ? 'none' :"flex"}} className='product_category_row'>
      <div className='simple-continer-row'>
        <div >

        <Main_Paper />
        </div>
  
        <Swiper
          spaceBetween={50}
          slidesPerView={3}>
          {
            products?.map((img) => (
              <>
                <SwiperSlide>
                  <ProductCard 

                  {...img}
                />
                </SwiperSlide>
              </>
            ))
            
          }


        </Swiper>
        <div style={{marginInline:"10px" , display:products?.length > per_page ? 'block' :"none"}}>

          <Arrow color={is_odd ? "black" :'white'} />
        </div>
    
      </div>
    </div>  
    </>
  )
}

export default CategoryHoemSectionWithProduct


//  0 *4 =>  0+4
//  1*4 => 4+ 4
// 