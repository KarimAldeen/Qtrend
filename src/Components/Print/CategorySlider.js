'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const data  = [
    {
        id:1  ,
        img:'/Print/1.png'
    },
    {
        id:2 ,
        img:'/Print/2.png'
    },
    {
        id:3  ,
        img:'/Print/3.png'
    }
]
function CategorySlider() {
 
    const sliderRender = data.map(slider =>(
            <img src={slider.img} alt={slider.id}  style={{height:"100px", objectFit:"contain"}}  key={slider.id}  />
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