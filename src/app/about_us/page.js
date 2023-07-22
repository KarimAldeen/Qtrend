import NavBar from '@/Components/NavBar'
import React from 'react'
import HUMAN from "../../../public/works/human.png";
import Image from "next/image";


function AboutUs() {
  return (
    <div className='AboutUs_page'>
      <NavBar/>
      {/* 
      <Image
        width={702}
        height={582}
        className="human"
        src={HUMAN}
        alt="image f"
      /> */}
     
      <div className='AboutUs_BG'>
        
        <img src='../AboutUs/AboutUs_BG.jpg' alt=''/>

        </div>
        <p> 
            QTREND is a leading digital marketing agency that specializes in providing innovative and result-driven <br/> solutions to help businesses thrive in the digital landscape. With a team of seasoned experts and a deep<br/> understanding of the latest trends in online marketing, we empower our clients to achieve their marketing <br/>goals and stay ahead of the competition.<br/>
            Our Approach:<br/>
            At QTREND, we believe in the power of creativity, data-driven strategies, and cutting-edge technology to<br/> deliver exceptional results. We tailor our approach to each client's unique needs and develop customized<br/> digital marketing campaigns that drive measurable outcomes.<br/>
            Services:<br/>
            We offer a comprehensive range of digital marketing services that encompass the entire spectrum of online <br/> promotion. Our services include search engine optimization (SEO), pay-per-click (PPC) advertising, social <br/> media marketing, content creation, email marketing, conversion rate optimization, and more. By leveraging <br/> multiple channels, we ensure maximum visibility and engagement for our clients' brands.
        </p> 
    </div>
  )
}

export default AboutUs