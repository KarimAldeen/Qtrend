"use client"

import NavBar from '@/Components/NavBar'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function FirstService() {  
  const Transtion = () => {
      document.getElementById("Transion_page").classList.add("Transion_page")

  };
  return (
    <div className='Services_Pages' id='Transion_page'>
            <NavBar/>

    <div className='FirstService_page'>
      
      <img className='FirstService_page' src='../Services_BG/Services_1.png' alt=''/>
      <div className='FirstService_Body'>
      <div className='Services1_Elements'>

        <img src='../Services_Elements/1_Section1.svg' alt='' className='Element1'/>
        {/* <Link href="/services/SecondService"> */}
      <div onClick={()=>Transtion()}>
                <img  src='../Services_Elements/2_Section1.svg' alt='' className='Element2'/>

      </div>

        {/* </Link> */}

      </div>
      </div>
    
    </div>
    <div className='SecondService_page' >
      <img className='SecondService_page' src='../Services_BG/Services_2.png' alt=''/>
      <div className='SecondService_Body'>
      <div className='Services2_Elements'>
        <div className='Elements_2_1'> 
        <img src='../Services_Elements/2_Section2.svg' alt='' className='Element2'/>

        <Link href="/services/FirstService">
        <img src='../Services_Elements/1_Section2.svg' alt='' className='Element1'/>

        </Link>
        </div>
        <Link href="/services/ThirdService">
        <img src='../Services_Elements/2_Section3.svg' alt='' className='Element3'/>

        </Link>
      </div>
      </div>
    
    </div>
    </div>
  )
}

export default FirstService