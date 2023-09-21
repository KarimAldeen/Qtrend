'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {useGetSlider} from '../../api/sliders' 
import { BaseURL, BaseURLImage } from '../../api/config';


const data  = [
    {
        id:1  ,
        img:'/Print/3.png'
    },
    {
        id:2 ,
        img:'/Print/2.png'
    },
    {
        id:3  ,
        img:'/Print/1.png'
    }
]
function CategorySlider() {
 
    const {data} = useGetSlider()
    // console.log(data?.category_slider);
    const sliderRender = data?.category_slider?.map(slider =>(
        <img  style={{zIndex:"0 !important"}}
        // src={BaseURLImage +slider.image} 
        src="../Print/heroimage.png"
        alt={slider.id}    key={slider.id} className='image-slider-category'  />
    ))
    
    return (
        <Carousel
        autoPlay 
        showArrows={false}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        dynamicHeight
        >
             {
                sliderRender 
             }
        </Carousel>
    )
}

export default CategorySlider