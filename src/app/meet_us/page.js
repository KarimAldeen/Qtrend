import NavBar from '@/Components/NavBar'
import React from 'react'
import HUMAN from "../../../public/works/human.png";
import Image from "next/image";
import {Poppins} from 'next/font/google'
import {LuMail} from 'react-icons/lu'
import{BiMobile}from 'react-icons/bi'
import {MdLocationOn} from 'react-icons/md'
const poppins = Poppins({
    weight: '900',
    subsets: ['latin'],
  })
function MeetUs() {
  return (
    <div className='meet-us-page'>
    <NavBar/>
      <div className='meet-us-mid-section'>
        <div className='meet-us-first-mid-section'>
        <p>MEET</p>
        <p>US</p>
        <Image
              width={702}
              height={582}
              className="human"
              src={HUMAN}
              alt="image f"
            />
        </div>
        <div className='meet-us-second-mid-section'> 
           <div>
               <p>Contact us</p>
               <p>Don't hesitate to get in touch - we're here to answer your questions and provide guidance.</p>
               <p>Getting in touch with our company is the first step towards unlocking new possibilities for your business. Whether you're seeking innovative solutions, exploring collaboration opportunities, or simply looking for expert guidance, our team is here to help.</p>
                <div>
                <BiMobile/>
                <p>+(974)31111291 <br/>+(974)33330282 </p>
                <LuMail/>
                <p>Qtrend-qatar@gmail.com</p>
                <MdLocationOn/>
                <p>Um Slal</p>
                </div>
           </div>

            <div>
              <div>
              <input type="text"  placeholder='Company Name'/>
              </div>

              <div>
              <input type="email"  placeholder='email'/>
              </div>

              <div>
              <input type="password"  placeholder='Password'/>
              </div>

              <div>
              <input type="text"  placeholder='Message'/>
              </div>
            </div>

        </div>




        </div> 

      {/* <div className='meet-us-mid-section'>
        <div className='meet-us-mid-left-section'>
          <span className={"meet "+ poppins.className}>MEET</span>
            <br/>
            <span className={"us "+ poppins.className}>US</span></div>
            <Image
              width={702}
              height={582}
              className="human"
              src={HUMAN}
              alt="image f"
            />
      </div> */}

    

  </div>  )
}

export default MeetUs