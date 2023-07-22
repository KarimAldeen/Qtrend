import NavBar from '@/Components/NavBar'
import React from 'react'
import {LuMail} from 'react-icons/lu'
import{BiMobile}from 'react-icons/bi'
import {MdLocationOn} from 'react-icons/md'
import {Inter} from 'next/font/google'
import Footer from '@/Components/Footer'

const inter = Inter({
     subsets: ['latin'] ,
     weight:['400']})
const MeetUs = () => {
  return (
    <>
    <div className='MeetUs'> 
    <NavBar/>
    <div className='MeetUs_BG'>
      <img src='../MeatUS/MeatUS_BG.png' alt=''/>
    </div>
    <div className='MeetUs_mid_section'>
        <div className='MeetUs_mid_section_left'>
        <h3>Contact us</h3>
        <h1>Don't hesitate to get in touch - we're here to answer<br/> your questions and provide guidance.</h1>
        <h6>Getting in touch with our company is the first step towards unlocking new possibilities <br/>for your business. Whether you're seeking innovative solutions, exploring collaboration opportunities, or simply looking for expert guidance, our team is here to help.</h6>
        <div className='MeetUs_info'>
          <div className='MeetUs_info_1'>
          <BiMobile/>
          <p>+(974)31111291 <br/>+(974)33330282 </p>
          </div>
          <div className='MeetUs_info_2'>
          <LuMail/>
          <p>Qtrend-qatar@gmail.com</p>
          </div>
          <div className='MeetUs_info_3'>
          <MdLocationOn/>
          <p>Um Slal</p>
          </div>
          
        </div>
        </div>
    

        <div className='MeetUs_mid_section_right'>
            <input type='text' placeholder='Company Name'></input>
            <input type='eamil' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <textarea type='text' placeholder='Message'></textarea>


        </div>

    </div>

    </div>
          {/* <Footer /> */}

</>
  )
}

export default MeetUs