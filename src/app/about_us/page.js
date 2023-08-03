import NavBar from '../../Components/Utils/NavBar'
import React from 'react'
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from '../../Components/Utils/Footer';
import { Frist_Section } from './AboutUS_Words';


function AboutUs() {

      ///////// This Page Take 224KB  

  return (
    <div className='AboutUs_page'>
      <NavBar/>
      <div className='AboutUs_BG'>      
        <img src='../AboutUs/About_US.webp' className='image-about-us' alt='image-about-us'/>
        </div>
        <div className='AboutUs_mid_section'>
        <p className='AboutUs_p'> 
        {Frist_Section}
        </p> 
        <div className='AboutUs_icons'>
        <div className='single_icon'><FaFacebookF/></div>
            <div className='single_icon'><FaTiktok/></div>
            <div className='single_icon'><FaInstagram/></div>
            <div className='single_icon'><FaWhatsapp/></div>
            <div className='single_icon'><FaLinkedinIn/></div>
            <div className='single_icon'><FaSnapchatGhost/></div>
        </div>
        <div className='AboutUs_info'>
          <h1>Partner with QTREND:</h1>
            <h6>If you are seeking a trusted digital marketing partner to elevate your online 
          presence and drive business growth, look no further than  Qtrend. With our unwavering focus on innovation, data-driven strategies, and client success, we are here to help you unlock the full  potential of digital marketing. Contact us today to embark on an exciting journey toward digital success.
          </h6>
        </div>
        <Footer/>

        </div>
    </div>
  )
}

export default AboutUs
