import FifthServiceSquare from '@/Components/Services/FifthServiceSquare';
import Footer from '@/Components/Utils/Footer'
import NavBar2 from '@/Components/Utils/NavBar2'
import React from 'react'
import {BsArrowRight} from "react-icons/bs"
import { FaFacebookF, FaTiktok, FaWhatsapp, FaSnapchatGhost, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FifthService = () => {
  return (
    <div className='FifthService_page'>
        <NavBar2/>
        <div className='FifthService_top_sec'>
              bbbbbbbbbbbbbbbbb
        </div>

        <div className='FifthService_mid_sec'>
            <div className='FifthService_mid_sec_left'>
                <h1 className='FifthService_title'>Looking For a Modern Web/App design?</h1>
                <h2 className='FifthService_desc'>You can count on us to provide you with cutting-edge and visually appealing website designs. Our team of skilled designers specializes in creating modern and sleek designs that align with the latest design trends and industry standards. Here are some key aspects of our modern web design services:</h2>
                <button className='FifthService_button'>
                  Contact us
                  <span className='FifthService_button_hover'>ok</span>
                  </button>
                  {/* <button className='FifthService_button2'> */}
                  {/* Contact us */}
                  {/* </button> */}
                  {/* <span className='ContactUs_button'>Contact us</span> */}
            </div>

            <div className='FifthService_mid_sec_right'>
              <div className='FifthServiceSquare_first'>
              <FifthServiceSquare 
              classNameForSquare={"FifthService_square2"}
              title={"Website Design and Layout:"}
              desc={"This involves creating the overall visual design of the website, including the color scheme, typography, graphics, and layout. It focuses on creating an aesthetically pleasing and engaging user interface (UI) design."}
              last={"Discover Expenses"}
              icon={<BsArrowRight/>}
              />
            
              
              </div>
              <span className='scale_span'>
                <FifthServiceSquare
              classNameForSquare={"FifthService_square1"} 
              title={"Website Design and Layout:"}
              desc={"This involves creating the overall visual design of the website, including the color scheme, typography, graphics, and layout. It focuses on creating an aesthetically pleasing and engaging user interface (UI) design."}
              last={"Discover Expenses"}
              icon={<BsArrowRight/>}
              />
              <div className='FifthServiceSquare_second'>
              <FifthServiceSquare 
              classNameForSquare={"FifthService_square"}
              title={"Website Design and Layout:"}
              desc={"This involves creating the overall visual design of the website, including the color scheme, typography, graphics, and layout. It focuses on creating an aesthetically pleasing and engaging user interface (UI) design."}
              last={"Discover Expenses"}
              icon={<BsArrowRight/>}
              />
              <FifthServiceSquare 
              classNameForSquare={"FifthService_square4"}
              title={"Website Design and Layout:"}
              desc={"This involves creating the overall visual design of the website, including the color scheme, typography, graphics, and layout. It focuses on creating an aesthetically pleasing and engaging user interface (UI) design."}
              last={"Discover Expenses"}
              icon={<BsArrowRight/>}
              />
              </div>
              </span>
            </div>
        </div>

        <div className='FifthService_last_sec'>
            <div className='FifthService_icons'>
            <div className='single_icon'><FaFacebookF/></div>
            <div className='single_icon'><FaTiktok/></div>
            <div className='single_icon'><FaInstagram/></div>
            <div className='single_icon'><FaWhatsapp/></div>
            <div className='single_icon'><FaLinkedinIn/></div>
            <div className='single_icon'><FaSnapchatGhost/></div>
            </div>
        </div>
          <Footer/>
    </div>
  )
}

export default FifthService