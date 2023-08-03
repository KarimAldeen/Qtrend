import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer_Left'>
                <img src='../Logo_Qtrend.svg' alt='logo' width="8vw" height="30vw" />
                <p className='p'>

                    Qtrend is a creative design agency that specializes in delivering the best full creative branding
                    , logo creation, and posts creation digital design solutions. With a passion for visual
                    aesthetics and a deep understanding of branding strategies,
                    Qtrend aims to help businesses establish a strong and impactful brand presence.
                </p>
                <div className='Footer_SocialMedia'>
                    <a className="btn btn-primary btn-lg btn-floating" aria-label="FaFacebookF" href="#!">  <FaFacebookF /></a>
                    <a className="btn btn-primary btn-lg btn-floating" aria-label="FaInstagram" href="#!">  <FaInstagram /></a>
                    <a className="btn btn-primary btn-lg btn-floating" aria-label="FaLinkedinIn" href="#!">  <FaLinkedinIn /></a>
                </div>
            </div>
            <div className='Footer_Right'>
                <div className='Footer_Row'>
                    <h3>Company</h3>
                    <Link aria-label='About' href="about_us">About</Link> 
                     <Link aria-label='Meet US' href="soon">Meet US</Link>
                      <Link aria-label='Support' href="soon">Support</Link>
                       <Link aria-label='Our work' href="works">Our work</Link>
                </div>
                <div className='Footer_Row'>
                    <h3>
                        Quick Link
                    </h3>
                    <a aria-label="Share Location" href="#!">Share Location</a>  <a aria-label="FAQs" href="#!">FAQs</a>
                </div>
                <div className='Footer_Row'>
                    <h3>Legal</h3>
                    <a aria-label="Terms & conditions" href="#!">Terms & conditions</a>   <a aria-label="Privacy Policy" href="#!"> Privacy Policy</a>
                </div>
            </div>

        </div>
    )
}

export default Footer