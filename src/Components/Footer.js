import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer_Left'>
                <img src='../Logo_Qtrend.svg' alt='logo'  />
                <p>

                    Qtrend is a creative design agency that specializes in delivering the best full creative branding
                    , logo creation, and posts creation digital design solutions. With a passion for visual
                    aesthetics and a deep understanding of branding strategies,
                    Qtrend aims to help businesses establish a strong and impactful brand presence.
                </p>
                <div className='Footer_SocialMedia'>
                 <a class="btn btn-primary btn-lg btn-floating"  href="#!">  <FaFacebookF/></a>
                 <a class="btn btn-primary btn-lg btn-floating"  href="#!">  <FaFacebookF/></a>
                 <a class="btn btn-primary btn-lg btn-floating"  href="#!">  <FaFacebookF/></a>
                </div>
            </div>
            <div className='Footer_Right'>
                <div className='Footer_Row'>
                    <h3>Company</h3>
                    <a>About</a>  <a>Contact us</a> <a>Support</a> <a>Our work</a>
                </div>
                <div className='Footer_Row'>
                    <h3>
                        Quick Link
                    </h3>
                    <a>Share Location</a>  <a>FAQs</a> 
                </div>
                <div className='Footer_Row'>
                    <h3>Legal</h3>
                    <a>Terms & conditions</a>   <a>Privacy Policy</a>
                </div>
            </div>

        </div>
    )
}

export default Footer