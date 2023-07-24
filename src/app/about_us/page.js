import NavBar from '@/Components/NavBar'
import React from 'react'
import Image from "next/image";
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from '@/Components/Footer';


function AboutUs() {
  return (
    <div className='AboutUs_page'>
      <NavBar/>
      <div className='AboutUs_BG'>      
        <img src='../AboutUs/AboutUs_BG.png' alt=''/>
        </div>
        <div className='AboutUs_mid_section'>

        <p className='AboutUs_p'> 
            QTREND is a leading digital marketing agency that specializes in providing innovative and result-driven <br/> solutions to help businesses thrive in the digital landscape. With a team of seasoned experts and a deep<br/> understanding of the latest trends in online marketing, we empower our clients to achieve their marketing <br/>goals and stay ahead of the competition.<br/>
            Our Approach:<br/>
            At QTREND, we believe in the power of creativity, data-driven strategies, and cutting-edge technology to<br/> deliver exceptional results. We tailor our approach to each client's unique needs and develop customized<br/> digital marketing campaigns that drive measurable outcomes.<br/>
            Services:<br/>
            We offer a comprehensive range of digital marketing services that encompass the entire spectrum of online <br/> promotion. Our services include search engine optimization (SEO), pay-per-click (PPC) advertising, social <br/> media marketing, content creation, email marketing, conversion rate optimization, and more. By leveraging <br/> multiple channels, we ensure maximum visibility and engagement for our clients' brands.
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
          <h6>If you're seeking a trusted digital marketing partner to elevate your online presence and drive business growth, look no further than <br/> Qtrend. With our unwavering focus on innovation, data-driven strategies, and client success, we are here to help you unlock the full <br/> potential of digital marketing. Contact us today to embark on an exciting journey toward digital success.</h6>
        </div>
        <Footer/>

        </div>
    </div>
  )
}

export default AboutUs
