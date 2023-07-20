// import Services_Cards from '@/Components/Services_Cards'
import Link from 'next/link'
import React from 'react'
import one from '../../public/Number/1.svg'
import NavBar from '@/components/NavBar'
import Services_Cards from '@/Components/Services_Cards'
import { FaFacebookF,FaTiktok,FaWhatsapp,FaSnapchatGhost,FaInstagram ,FaLinkedinIn } from "react-icons/fa";

const Page = () => {

  return (
    <>
    <NavBar />
      <div className='Home'>
          
        <img src="../HomeBG.png" alt="Image" />
      </div>
      <div className='Home2'>
        <img src="../HomeBG123.png" alt="Image" />
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
          <Services_Cards  Key={1}/>
          <Services_Cards  Key={2} />
          <Services_Cards  Key={3} />
        
        </div>
        <div className='Home2_Services2'>
          <Services_Cards  Key={4} />
          <Services_Cards  Key={5} />
          <Services_Cards  Key={6} />


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
      <div className='Home3'>
        <img src="../HomeBG4.png" alt="Image" />
        </div>
        <div className='Home4'>
        <img src="../Footer.png" alt="Image" />
        </div>

    </>

  )
}

export default Page