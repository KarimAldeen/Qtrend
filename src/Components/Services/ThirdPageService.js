'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import CardThirdService from './CardThirdService'

function ThirdPageService() {
    useEffect(() => {
        const IMages = ['/Services/Services3/5.png', '/Services/Services3/6.png', '/Services/Services3/7.png']
        let i = 0;
        setInterval(() => {
            let index = i

            if (document.getElementById('dynmic-image')) {
                document.getElementById('dynmic-image').src = IMages[index]
            }
            i = (i + 1) % IMages.length


        }, 3000)

    }, [])
    const Transion_page4 = () => {
        document.getElementById("Transion_page").classList.add("Transion_page4")

    }
    return (
        <div className='ThirdService_page' id='ThirdService_page' >
            <div className='Services3_Elements'>
                <div className='Services3_Elements_Container'>
                    <img src='../Services/Services3/3Services_4.svg' alt='' className='Elements3 ' onClick={()=>Transion_page4()} />
                    <img src='../Services/Services3/Polygon4.svg' alt='' className='Polygon4_Right ' />
                </div>


            </div>
            <div className='images'>
                <div className='img-service-container down-image'>
                    <img
                        alt='/service'
                        className='img-service'
                        src={'/Services/Services3/1.png'}
                    />
                </div>
                <div className='img-service-container'>
                    <img
                        alt='/service'
                        className='img-service'
                        src={'/Services/Services3/2.png'}
                    />
                </div>
                <div className='img-service-container'>
                    <img
                        alt='/service'
                        className='img-service'
                        src={'/Services/Services3/3.png'}
                    />
                </div>
                <div className='img-service-container down-image'>
                    <img
                        alt='/service'
                        className='img-service'
                        src={'/Services/Services3/4.png'}
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
           brand presence across all your video content. `}
                    classNameForDescription={'card-service-third-row-p'}

                />

                <div className='img-service-container-third-row '>
                    <img
                        id='dynmic-image'
                        alt='/service'
                        className='img-service'
                        src={'../Services/Services3/first.webp'}
                    />
                </div>
            </div>

        </div>
    )
}

export default ThirdPageService