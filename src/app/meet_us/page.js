"use client"

import React, { useEffect, useState } from 'react';
import {LuMail} from 'react-icons/lu'
import{FaMobileAlt}from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import NavBar from '@/Components/Utils/NavBar';
import Footer from '@/Components/Utils/Footer';
import Gradian from './Gradian';
import MeatUS_BG from './MeatUS_BG';

const MeetUs = () => {
  const [gradianClass, setGradianClass] = useState('Geadian_On_1');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradianClass((prevClass) => {
        if (prevClass === 'Geadian_On_1') return 'Geadian_On_2';
        else if (prevClass === 'Geadian_On_2') return 'Geadian_On_3';
        else return 'Geadian_On_1';
      });
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className='MeetUs'>
        <NavBar />
        <div className={`MeetUs_BG ${gradianClass} BG_Animation`} id='MeetUs_BG'>
          <MeatUS_BG />
          <Gradian />
        </div>

        <div className='MeetUs_mid_section'>
          <div className='MeetUs_mid_section_left'>
            <h1>Contact us</h1>
            <h2>
              Don't hesitate to get in touch - we're here to answer<br /> your questions and provide guidance.
            </h2>
            <h3>
              Getting in touch with our company is the first step towards unlocking new possibilities
              <br />
              for your business. Whether you're seeking innovative solutions, exploring collaboration opportunities,
              or simply looking for expert guidance, our team is here to help.
            </h3>
            <div className='MeetUs_info'>
          <div className='MeetUs_info_1'>
            <a href='https://www.FaMobileAlt.com/' aria-label="FaMobileAlt" target="_blank" rel="noopener">
            <FaMobileAlt/>
            </a>
         
          <p>+(974)31111291 <br/>+(974)33330282 </p>
          </div>
          <div className='MeetUs_info_2'>
          <a href='https://www.LuMail.com/' aria-label="LuMail" target="_blank" rel="noopener">
          <LuMail/>
            </a>
         
          <p>Qtrend-qatar@gmail.com</p>
          </div>
          <div className='MeetUs_info_3'>
          <a  href='https://www.MdLocationOn.com/' aria-label="MdLocationOn" target="_blank" rel="noopener">
          <MdLocationOn/>
            </a>
         
          <p>Um Slal</p>
          </div>
          
        </div>
          </div>
          <form className='MeetUs_mid_section_right'>
            <input type='text' placeholder='Company Name' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' autoComplete='on' />
            <textarea type='text' placeholder='Message' />
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MeetUs;
