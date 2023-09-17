import React from 'react'
import ProductCard from './ProductCard'
import Main_Paper from '../mhmad/Main_Paper'
import Card from '../mhmad/Card'
// import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProductCardNew from '../Print/ProductCardNew'
function CategoryHoemSectionWithProduct({color , index , products}) {
    const is_odd = index %2 ==1 
    
  return (
    <>
    <div style={{background:is_odd? "#EDF1F4" :color , display:products?.length == 0 ? 'none' :"flex"}} className='product_category_row'>
      <div className='simple-continer-row'>
        <Main_Paper />
    <div className=''>
    <ProductCardNew />
        {/* <Carousel
        autoPlay 
        showArrows={false}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        dynamicHeight
        >
            {
                products.map(product =>(
                <ProductCardNew  key={product.id}/>
                ))
            }
        </Carousel> */}
      
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