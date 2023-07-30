import React from 'react'
import Services_Cards from '@/Components/Utils/Services_Cards'
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import NavBar from '@/Components/Utils/NavBar';
import Home4 from '../Components/Home/Home4'
import LogoShadow from '@/Components/Home/LogoShadow';
import Footer from '@/Components/Utils/Footer';
import Home1_BG from '@/Components/Home/Home1_BG';

const Page = () => {
  const Cards = {
    Url1: "../Home/2+3/Services_Card/CARD1.webp",
    Url2: "../Home/2+3/Services_Card/CARD2.webp",
    Url3: "../Home/2+3/Services_Card/CARD3.webp",
    Url4: "../Home/2+3/Services_Card/CARD4.webp",
    Url5: "../Home/2+3/Services_Card/CARD5.webp",
    Url6: "../Home/2+3/Services_Card/CARD6.webp",
  }
  return (
    <div className='HOME_PAGE'>
      <div className='Home'>
        <NavBar />
        <h2 className='HomeCenter_h'>We Boost Businesses Success</h2>
        <button className='HomeCenter_button'>Lets get in touch!</button>
        {/* <img src="../Home/1/HOME_BG.gif" alt="Image" /> */}
          <Home1_BG/>

      </div>
      <div className='Home2'>
        <img src="../Home/2+3/HomeBG23.webp" alt="Image" />
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
            <Services_Cards Url={Cards.Url1} Key={1} Word1={"CREATIVE"} Word2={" DESIGNS"} />
            <Services_Cards Url={Cards.Url2} Key={2} Word1={"DIGITAL"} Word2={" MARKETING"} />
            <Services_Cards Url={Cards.Url3} Key={3} Word1={"PHOTOS"} Word2={" &VIDEOS"} />

          </div>
          <div className='Home2_Services2'>
            <Services_Cards Url={Cards.Url4} Key={4} Word1={"MODELING"} Word2={" SERVICES"} />
            <Services_Cards Url={Cards.Url5} Key={5} Word1={"APPS & WEB"} Word2={" DEVELOPMENT"} />
            <Services_Cards Url={Cards.Url6} Key={6} Word1={"BLOGGERS"} Word2={"  SERVICES"} />


          </div>
          <div className='Services_Social'>
            <div className='Services_MIcon MIcon1 '>
              <i>
                <FaFacebookF />
              </i>

            </div>
            <div className='Services_MIcon MIcon2'>

              <i>
                <FaTiktok />
              </i>
            </div>
            <div className='Services_MIcon MIcon3'>

              <i>
                <FaInstagram />
              </i>

            </div>
            <div className='Services_MIcon MIcon4'>

              <i>
                <FaSnapchatGhost />
              </i>

            </div>
            <div className='Services_MIcon MIcon5'>

              <i>
                <FaWhatsapp />
              </i>

            </div>
            <div className='Services_MIcon MIcon6'>

              <i>
                <FaLinkedinIn />
              </i>
            </div>

          </div>

        </div>
      </div>
      <Home4 />
      <div className='Home4'>

        <img className='Home4_BG_Image' src="../Home/5/Home5_Image/Home5_BG.png" alt="Image" />
        <div className='Home4_Top'>
          <h1>Our Awesome Portofolio</h1>
          <LogoShadow />

        </div>
        <div className='Home4_Down'>
          <div className='Home4_Down_Left'>
            Left
          </div>
          <div className='Home4_Down_Right'>

            <div className="ImageContainer">
              <img className='Home4_Sec2' src='../Home/5/Home5_Image/Home5_Sec3.svg' alt='' />
              <img className='Home4_Sec2' src='../Home/5/Home5_Image/Home5_Sec2.svg' alt='' />
              <img className='Home4_Sec2' src='../Home/5/Home5_Image/Home5_Sec3.svg' alt='' />
            </div>
            <img className='Rectangle' src='../Home/5/Home5_Image/Rectangle.svg' alt='' />
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
        <img className='Home4_IbraDonkey' src="../Home/5/Home5_Image/IbraDonkey.svg" alt="Image" />

      </div>

      <Footer />
    </div>

  )
}

export default Page