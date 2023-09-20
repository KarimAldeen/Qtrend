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
function CategoryHoemSectionWithProduct({color , index , products , perPage ,category}) {
    const is_odd = index %2 ==1 
console.log(perPage);
  
  return (
    <>
    <div style={{background:is_odd? "#EDF1F4" :color , display:products?.length == 0 ? 'none' :"flex"}} className='product_category_row'>
      <div className='simple-continer-row'>
        <div >

        <Main_Paper
         name1={category?.name.split(' ')[0]} 
          name2={category?.name.split(' ')[1] ?? ''} 
        quick_overview={category?.description} id={category?.id}  image={category?.category_image}/>
        </div>
  
        <Swiper
          spaceBetween={0}
          slidesPerView={perPage}>
          {
            products?.map((product) => (
              
                <SwiperSlide key={product.id}>
                  <ProductCard
                  id={product.id} 
                  image={product?.product_main_image}
                  price={product?.price}
                  from_price={product?.low_price}
                  to_price={product?.high_price}
                  translate={product?.translations}
                  index={0}
                  
                />
                </SwiperSlide>
              
            ))
            
          }


        </Swiper>
        <div style={{marginInline:"10px" , display:products?.length > perPage ? 'block' :"none"}}>

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