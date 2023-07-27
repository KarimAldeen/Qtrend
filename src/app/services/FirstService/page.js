"use client"

import NavBar from '@/Components/NavBar'
import React from 'react'
import Image from './Image'
import Girl from './Girl'
import Footer from '@/Components/Footer'

function FirstService() {
  const Transtion_Page2 = () => {
    document.getElementById("Transion_page").classList.remove("Back_page")
    document.getElementById("Transion_page").classList.add("Transion_page")
    setTimeout(() => {

      document.getElementById("Transion_page").classList.add("Timer")
      

    }, "500");

  }
  const Transtion_Page3 = () => {
    document.getElementById("Transion_page").classList.add("Transion_page3")
    document.getElementById("Element1").src = "../Services_Elements/3_Section2.svg"
    document.getElementById("Element2").src = "../Services_Elements/3_Section3.svg"


  }
  const Back_Page1 = (e) => {
    const Src = e.target.src ;
    if (Src.includes('2_Section1')) {
      document.getElementById("Transion_page").classList.remove("Transion_page")
      document.getElementById("Transion_page").classList.add("Back_page")
        console.log('1');
    } else {
      document.getElementById("Transion_page").classList.remove("Back_page")
      document.getElementById("Transion_page").classList.add("Transion_page")

      document.getElementById("Transion_page").classList.remove("Transion_page3")
    document.getElementById("Element1").src = "../Services_Elements/2_Section1.svg"
    document.getElementById("Element2").src = "../Services_Elements/2_Section2.svg"
    }
   

  }
  return (
    <div className='Services_Pages' id='Transion_page'>
      <NavBar />
      <div className='FirstService_page'>
        <div className='FirstService_Images'>

          <Image />

          <img src='../Services1/Haje.png' alt='' className='Haje' />

        </div>
        <div className='FirstService_Body'>
          <div className='Services1_Elements'>

            <img  src='../Services_Elements/1_Section1.svg' alt='' className='Element1' />

            <div></div>
            <div onClick={() => Transtion_Page2()}>
              <img src='../Services_Elements/1_Section2.svg' alt='' className='Element2' />
            </div>

          </div>
            <p className='FirstService_p'>Branding and Identity:</p>
          <div className='FirstService_info'>
            <div className='FirstSection_info'>
                <div>
                  <h6>LOGOS</h6>
                  <h5>Our company is dedicated to delivering the best unique logos by combining our expertise in design, creativity, and strategic thinking. We follow a comprehensive process that ensures each logo we create is tailored to our clients' needs and exceeds their expectations.</h5>
                </div> 
                <div>
                  <h6>BROCHURES</h6>
                  <h5>By combining our collaborative approach, research-driven insights, meticulous design process, and dedication to meeting clients' objectives, we ensure that our company delivers the best unique brochures.</h5>
                </div> 
            </div>

            <div className='SecondSection_info'>
              <div>
                  <h6>CONTENT WRITING</h6>
                  <h5>Our company is dedicated to delivering the best unique logos by combining our expertise in design, creativity, and strategic thinking. We follow a comprehensive process that ensures each logo we create is tailored to our clients' needs and exceeds their expectations.</h5>
              </div> 
              <div>
                  <h6>POST DESIGNS</h6>
                  <h5>Our company is dedicated to delivering the best unique logos by combining our expertise in design, creativity, and strategic thinking. We follow a comprehensive process that ensures each logo we create is tailored to our clients' needs and exceeds their expectations.</h5>
              </div> 
            </div>
          </div>

          <div className='FirstService_text'>
            <h3 className='title'>Branding and Identity:</h3>
            <p className='description'>We help businesses build strong and memorable brand identities. Our team of talented designers and strategists will work closely with you to develop a unique brand identity that reflects your values, resonates with your target audience, and sets you apart from the competition. From logo design to brand guidelines, we'll ensure your brand stands out in a crowded marketplace.</p>
            <h3 className='title'>Graphic Design:</h3>
            <p className='description'>Our creative designers have an eye for detail and a passion for creating visually stunning designs. Whether you need eye-catching brochures, engaging social media graphics, impactful packaging, or stunning print materials, we'll bring your vision to life and create designs that leave a lasting impression.</p>
        </div>

        </div>
        <Footer/>
 
      </div>

      <div className='SecondService_page'>
        <div className='SecondService_Images'>
          <Girl/>
          {/* <img src='../Services2/Girl_Logo.png' alt='' className='Girl_Logo' /> */}
          <img src='../Services2/Polygon_Right.png' alt='' className='Polygon_Right ' />

        </div>
        <div className='SecondService_Body'>
          <div className='Services2_Elements'>
            <div className='Elements_2_1'>
              <img src='../Services_Elements/2_Section2.svg' alt='' id='Element2' className='Element2' />
              <img src='../Services_Elements/2_Section1.svg'  alt='' id='Element1' className='Element1' onClick={(e) => Back_Page1(e)} />
            </div>


            <div >
              <img src='../Services_Elements/2_Section3.svg' alt='' className='Element3'onClick={() => Transtion_Page3()}  />

            </div>

          </div>
        </div>
      </div>
      {/* <div className='ThirdService_page'>
        <div className='ThirdService_Images'>
          <img src='../Services2/Girl_Logo.png' alt='' className='Girl_Logo' />
          <img src='../Services2/Polygon_Right.png' alt='' className='Polygon_Right ' />

        </div>
        <div className='ThirdService_Body'>
          <div className='Services2_Elements'>
            <div className='Elements_2_1'>
              <img src='../Services_Elements/2_Section2.svg' alt='' className='Element2' />
              <img src='../Services_Elements/2_Section1.svg'  alt='' className='Element1' onClick={() => Back_Page1()} />
            </div>


            <div >
              <img src='../Services_Elements/2_Section3.svg' alt='' className='Element3' />

            </div>

          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FirstService