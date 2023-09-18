import React from 'react'

import {LuMail} from 'react-icons/lu'
import{FaMobileAlt}from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import { useGetALlStatics } from '../../api/ContactUs/Contact';
import {BsPersonCircle} from 'react-icons/bs'
import NavBar3 from '../../Components/Utils/NavBar3'
import IMG from '../../../public/works/4.webp'
import CategoryCard from '../../Components/Print/CategoryCard'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
function TopHeader() {
    const {data  , isError}  = useGetALlStatics()

  return (
    <div className='HEADER'>
     <div className='header_container'>
        <div className='header_left'>
            <div className='Print_info_1'>
              <FaMobileAlt/>
            <p>{data?.find(static_info => static_info.key == 'phone')?.value}</p>
            </div>

            <div className='Print_info_2'>
            <LuMail/>
            <p>{data?.find(static_info => static_info.key == 'email')?.value}</p>
            </div>
          </div>

          <div className='header_right'>
            <div className='print_info_3'>
              <FaInstagram/>
              <FaFacebookF/>
              <FaLinkedinIn/>
            </div>
          </div>
           
            
        </div>
        {/* <NavBar3/> */}
    </div>
  )
}

export default TopHeader