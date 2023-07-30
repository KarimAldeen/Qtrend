import React from 'react'
import Services_Cards from '@/Components/Utils/Services_Cards'
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Home2 = () => {
  return (
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
            <Services_Cards  Key={1} Word1={"CREATIVE"} Word2={" DESIGNS"} />
            <Services_Cards  Key={2} Word1={"DIGITAL"} Word2={" MARKETING"} />
            <Services_Cards  Key={3} Word1={"PHOTOS"} Word2={" &VIDEOS"} />

          </div>
          <div className='Home2_Services2'>
            <Services_Cards Key={4} Word1={"MODELING"} Word2={" SERVICES"} />
            <Services_Cards Key={5} Word1={"APPS & WEB"} Word2={" DEVELOPMENT"} />
            <Services_Cards Key={6} Word1={"BLOGGERS"} Word2={"  SERVICES"} />


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
  )
}

export default Home2