"use client"

import NavBar from '@/Components/NavBar'
import React from 'react'
import Image from './Image'
import Girl from './Girl'

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
    // if(){

    // }
    document.getElementById("Transion_page").classList.remove("Transion_page")
    document.getElementById("Transion_page").classList.add("Back_page")
    console.log(e?.target.src);

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

            <img src='../Services_Elements/1_Section1.svg' alt='' className='Element1' />
            <div onClick={() => Transtion_Page2()}>
              <img src='../Services_Elements/1_Section2.svg' alt='' className='Element2' />
            </div>

          </div>
        </div>
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