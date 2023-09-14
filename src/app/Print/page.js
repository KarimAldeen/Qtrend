"use client"
import React from 'react'
import {LuMail} from 'react-icons/lu'
import{FaMobileAlt}from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import { useGetALlStatics } from '../../api/ContactUs/Contact';
import {BsPersonCircle} from 'react-icons/bs'
import NavBar3 from '../../Components/Utils/NavBar3'
import IMG from '../../../public/works/4.webp'
import Product from '../../Components/Print/product'
import CategoryCard from '../../Components/Print/CategoryCard'
const page = () => {
    const {data  , isError}  = useGetALlStatics()

  return (
    <CategoryCard/>
    // <div className='print_page'>
    //     <div className='header_container'>
    //     <div className='header_left'>
    //       <div className='Print_info_1'>
    //         {/* <a href='https://www.FaMobileAlt.com/' aria-label="FaMobileAlt" target="_blank" rel="noopener"> */}
    //         <FaMobileAlt/>
    //         {/* </a> */}

    //       <p>{data?.find(static_info => static_info.key == 'phone')?.value}</p>
    //       </div>
    //       <div className='Print_info_2'>
    //       {/* <a href='https://www.LuMail.com/' aria-label="LuMail" target="_blank" rel="noopener"> */}
    //       <LuMail/>
    //         {/* </a> */}
         
    //       <p>{data?.find(static_info => static_info.key == 'email')?.value}</p>
    //       </div>
    //       <div className='Print_info_3'>
    //       {/* <a  href='https://www.MdLocationOn.com/' aria-label="MdLocationOn" target="_blank" rel="noopener"> */}
    //       <MdLocationOn/>
    //         {/* </a> */}
         
    //       <p>{data?.find(static_info => static_info.key == 'location')?.value}</p>
    //       </div>
          
    //     </div>
    //         <div className='header_right'>
    //             <BsPersonCircle/>
    //             <a className='sign_in_up'>
    //                 <p>Sign in /Sign up</p>
    //             </a>
    //         </div>
    //     </div>
    //     <NavBar3/>
    //     <div className='home_section'>
    //         <div className='home_first'>
    //             hssssssssssssssss
    //         </div>

    //         <div className='home_second'>
    //             <div className='home_second_left'>
    //                 <p className='frist_p'>WE OFFER TOP</p>
    //                 <p className='second_p'>PRINTING SERVICES</p>
    //                 <p className='third_p'>AFFORDABLE RATES FOR QUALITY PRINTS WITH PROFESSIONAL RESULTS.</p>
    //                 <button className='request_button'>REQUEST NOW</button>
    //             </div>
    //             <div className='home_second_right'>
    //                 <img src="https:pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/" alt='llll'/>
    //             </div>
    //         </div>

    //     </div>
    // </div>
  )
}

export default page