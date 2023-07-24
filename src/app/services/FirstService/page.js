import NavBar from '@/Components/NavBar'
import React from 'react'
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import FirstService from '@/Components/Services/FirstService';

function FirstService() {
  return (
    <>
    <div className='FirstService_page'>
      <NavBar/>
      <img className='FirstService_page' src='../Services/FirstService/FirstService_BG.' alt=''/>

      <div className='FirstService_icons'>
          <FaFacebookF/>
          <FaTiktok/>
          <FaInstagram/>
          <FaWhatsapp/>
          <FaLinkedinIn/>
          <FaSnapchatGhost/>
        </div>
    </div>
    </>
  )
}

export default FirstService