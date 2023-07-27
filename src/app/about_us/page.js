import NavBar from '@/Components/Utils/NavBar'
import React from 'react'
import Image from "next/image";
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from '@/Components/Utils/Footer';


function AboutUs() {
  return (
    <div className='AboutUs_page'>
      <NavBar/>
      <div className='AboutUs_BG'>      
        <img src='../AboutUs/AboutUs_BG.png' className='image-about-us' alt='image-about-us'/>
        </div>
        <div className='AboutUs_mid_section'>

        <p className='AboutUs_p'> 
            QTREND is a leading digital marketing agency that specializes in providing innovative and result-driven  solutions to help businesses thrive in the digital landscape. With a team of seasoned experts and a deep understanding of the latest trends in online marketing, we empower our clients to achieve their marketing goals and stay ahead of the competition.
            Our Approach:
            At QTREND, we believe in the power of creativity, data-driven strategies, and cutting-edge technology to deliver exceptional results. We tailor our approach to each client s unique needs and develop customized  digital marketing campaigns that drive measurable outcomes.
            Services:
            We offer a comprehensive range of digital marketing services that encompass the entire spectrum of online  promotion. Our services include search engine optimization (SEO), pay-per-click (PPC) advertising, social  media marketing, content creation, email marketing, conversion rate optimization, and more. By leveraging  multiple channels, we ensure maximum visibility and engagement for our clients brands.
          
        </p> 
        <div className='AboutUs_icons'>
          <FaFacebookF/>
          <FaTiktok/>
          <FaInstagram/>
          <FaWhatsapp/>
          <FaLinkedinIn/>
          <FaSnapchatGhost/>
        </div>
        <div className='AboutUs_info'>
          <h1>Partner with QTREND:</h1>
          <h6>If you are seeking a trusted digital marketing partner to elevate your online <br/>
          presence and drive business growth, look no further than  Qtrend. With our unwavering focus on innovation, data-driven strategies, and client success, we are here to help you unlock the full  potential of digital marketing. Contact us today to embark on an exciting journey toward digital success.
          </h6>
        </div>
        <Footer/>

        </div>
    </div>
  )
}

export default AboutUs
