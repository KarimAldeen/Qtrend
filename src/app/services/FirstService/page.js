"use client"

import NavBar from '@/Components/NavBar'
import React from 'react'
import Image from './Image'

function FirstService() {  
    const Transtion = () => {
        document.getElementById("Transion_page").classList.add("Transion_page")
        // setTimeout(() => {

        //   document.getElementById("Wing").classList.add("None")
        //   document.getElementById("Hajeat_Moaz").src = "../Services2/Hajeat_Wing.png"
        //   document.getElementById("Hajeat_Moaz").classList.add("Hajeat_Wing")

        // }, "500");

  }
  return (
    <div className='Services_Pages' id='Transion_page'>
            <NavBar/>
    <div className='FirstService_page'>
    <div className='FirstService_Images'>
    {/* <img src='../Services1/Hajeat_Moaz.png' alt='' className='Hajeat_Moaz' id='Hajeat_Moaz'/> */}

    <Image/>

    <img src='../Services1/Haje.png' alt='' className='Haje'/>

    </div>
    <div className='FirstService_Body'>
      <div className='Services1_Elements'>

        <img src='../Services_Elements/1_Section1.svg' alt='' className='Element1'/>
      <div onClick={()=>Transtion()}>
      <img  src='../Services_Elements/2_Section1.svg' alt='' className='Element2'/>
      </div>

      </div>
      </div>
    </div>
  
    <div className='SecondService_page'>
    <div className='SecondService_Images'>
    {/* <img src='../Services1/Haje.png' alt='' className='Haje'/> */}

    </div>
    <div className='SecondService_Body'>
      {/* <div className='Services1_Elements'>

        <img src='../Services_Elements/1_Section1.svg' alt='' className='Element1'/>
      <div onClick={()=>Transtion()}>
      <img  src='../Services_Elements/2_Section1.svg' alt='' className='Element2'/>
      </div>

      </div> */}
      </div>
    </div>
    </div>
  )
}

export default FirstService