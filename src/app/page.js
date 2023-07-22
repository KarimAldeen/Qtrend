import React from 'react'
import Services_Cards from '@/Components/Services_Cards'
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import NavBar from '@/Components/NavBar';
import Home3 from '../Components/Home/Home3'
import LogoShadow from '@/Components/Home/LogoShadow';
import Footer from '@/Components/Footer';

const Page = () => {
  const Cards= {
    Url1 : "Services_Card/CARD1.png",
    Url2 : "Services_Card/CARD2.png",
    Url3 : "Services_Card/CARD3.png",
    Url4 : "Services_Card/CARD4.png",
    Url5 : "Services_Card/CARD5.png",
    Url6 : "Services_Card/CARD6.png",
  }
  return (
    <div className='HOME_PAGE'>
      <div className='Home'>
      <NavBar />

        <img src="../HOMEBG_GIF.gif" alt="Image" />


      </div>
      <div className='Home2'>
          <img src="../HomeBG23.png" alt="Image" />
        <div className='Home2_Contain'>
          <div className='Home2_Text'>
            <h2>Welcome</h2>
            <div className='Home2_Text_h1'>
              <h1>
                Extend Your Market Reach by Establishing a Distinct
              </h1>
              <h1>
                Brand Identity and Creating Appealing Marketing Content
              </h1>
            </div>
            <p>
              Engage a Larger Customer Base with a Compelling Brand Identity and a Collection of Visually Striking Marketing Materials.Reach a Broader Customer
              Segment by Crafting a Standout Brand Identity and Compelling Visual Marketing Materials
            </p>
            <button className="btn">Let’s Talk</button>

          </div>
          <div className='Home2_Services'>
            <Services_Cards  Url={Cards.Url1}  Key={1} Word1={"CREATIVE"} Word2={" DESIGNS"}/>
            <Services_Cards  Url={Cards.Url2}  Key={2} Word1={"DIGITAL"} Word2={" MARKETING"}/>
            <Services_Cards  Url={Cards.Url3}  Key={3} Word1={"PHOTOS"} Word2={" &VIDEOS"}/>

          </div>
          <div className='Home2_Services2'>
            <Services_Cards  Url={Cards.Url4}  Key={4} Word1={"MODELING"} Word2={" SERVICES"}/>
            <Services_Cards  Url={Cards.Url5}  Key={5} Word1={"APPS & WEB"} Word2={" DEVELOPMENT"}/>
            <Services_Cards  Url={Cards.Url6}  Key={6} Word1={"BLOGGERS"} Word2={"  SERVICES"}/>


          </div>
          <div className='Services_Social'>
            <div className='Services_MIcon MIcon1 '>
              <FaFacebookF />
            </div>
            <div className='Services_MIcon MIcon2'>
              <FaTiktok />
            </div>
            <div className='Services_MIcon MIcon3'>
              <FaInstagram />

            </div>
            <div className='Services_MIcon MIcon4'>
              <FaSnapchatGhost />

            </div>
            <div className='Services_MIcon MIcon5'>
              <FaWhatsapp />

            </div>
            <div className='Services_MIcon MIcon6'>
              <FaLinkedinIn />
            </div>

          </div>

        </div>
      </div>
      <Home3 />
      <div className='Home4'>

        <img className='Home4_BG_Image' src="../Home4_BG.png" alt="Image" />
        <div className='Home4_Top'>
          <h1>Our Awesome Portofolio</h1>
          {/* <img src="../Home4_Image/Logo_Shadow.svg" alt="Image" /> */}
          <LogoShadow />

        </div>
        <div className='Home4_Down'>
          <div className='Home4_Down_Left'>
            Left
          </div>
          <div className='Home4_Down_Right'>
         
<div class="ImageContainer">
    <img className='Home4_Sec2' src='../Home4_Image/Home4_Sec3.svg' alt='' />
    <img className='Home4_Sec2' src='../Home4_Image/Home4_Sec2.svg' alt='' />
    <img className='Home4_Sec2' src='../Home4_Image/Home4_Sec3.svg' alt='' />
</div>  
<img className='Rectangle' src='../Home4_Image/Rectangle.svg' alt='' />
<div className='Home4_Text'>
  <h3>
  PLEASE NOTE
  </h3>
  <p>
  This is a brief overview of our portfolio, and each project represents our capabilities in branding,
   marketing, and video/photo production. We would be delighted to provide
   more detailed information and showcase our work in a comprehensive portfolio presentation 
   tailored to your specific requirements.
  </p>

</div>
          </div>

        </div>
        <img className='Home4_IbraDonkey' src="../Home4_Image/IbraDonkey.svg" alt="Image" />

      </div>

<Footer/>
    </div>

  )
}

export default Page