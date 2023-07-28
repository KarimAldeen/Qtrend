import Image from 'next/image'
import React from 'react'
import CardThirdService from './CardThirdService'

function ThirdPageService() {
  return (
    <div className='ThirdService_page' id='ThirdService_page'>
            
        <div className='images'>
            <div className='img-service-container down-image'>
                <img 
                alt='/service'
                className='img-service'
                src={'/Services/Services3/first.png'}
                />
            </div>
            <div className='img-service-container'>
                <img 
                alt='/service'
                className='img-service'
                src={'/Services/Services3/first.png'}
                />
            </div>
            <div className='img-service-container'>
                <img 
                alt='/service'
                className='img-service'
                src={'/Services/Services3/first.png'}
                />
            </div>
            <div className='img-service-container down-image'>
                <img 
                alt='/service'
                className='img-service'
                src={'/Services/Services3/first.png'}
                />
            </div>
        </div>
       <CardThirdService title={'PHOTOS'}
       style={{
                margin: "auto",
                marginTop: "1.5vw"

       }} description={
        `Leverage your in-depth brand knowledge,
        seamless integration capabilities, cost savings, and collaborative spirit to
         create visuals that authentically represent your brand and resonate with your target audience.`} />


        <div className='third-row-service-third'>

        <CardThirdService title={'VIDEO TAPING'} description={
        `Having our company in charge of video taping
         ensures that the videos align with your brand's 
         visual identity and guidelines. The videos will 
         reflect the same aesthetics, style, and tone that your
          brand is known for, creating a consistent and recognizable
           brand presence across all your video content. ddddddddddddddddddddddddddddddddddddddd  dddddddddddddddd dddddddddd`}
           classNameForDescription={'card-service-third-row-p'}
           
          />

    <div className='img-service-container-third-row '>
                <img 
                alt='/service'
                className='img-service'
                src={'/Services/Services3/first.png'}
                />
            </div>
        </div>
      
    </div>
  )
}

export default ThirdPageService