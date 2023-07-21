import React from 'react'
import Services_Cards from '@/Components/Services_Cards'
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import NavBar from '@/Components/NavBar';
import Home3 from '../Components/Home/Home3'
import LogoShadow from '@/Components/Home/LogoShadow';
const Page = () => {
  return (
    <>
      <NavBar />
      <div className='Home'>

        <img src="../HomeBG.png" alt="Image" />
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
            <Services_Cards Key={1} />
            <Services_Cards Key={2} />
            <Services_Cards Key={3} />

          </div>
          <div className='Home2_Services2'>
            <Services_Cards Key={4} />
            <Services_Cards Key={5} />
            <Services_Cards Key={6} />


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

          </div>

        </div>
      </div>

    </>

  )
}

export default Page