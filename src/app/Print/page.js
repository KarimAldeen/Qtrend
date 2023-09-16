"use client"
import React from 'react'
import TopHeader from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar';
import { useGetALlStatics } from '../../api/ContactUs/Contact';
const Page = () => {

  return (
   
    <div className='print_page'>
      <TopHeader />
        <div className='home_section'>
        <PrintNavBar/>

            <div className='home_second'>
                <div className='home_second_left'>
                    <p className='frist_p'>WE OFFER TOP</p>
                    <p className='second_p'>PRINTING SERVICES</p>
                    <p className='third_p'>AFFORDABLE RATES FOR QUALITY PRINTS WITH PROFESSIONAL RESULTS.</p>
                    <button className='request_button'>REQUEST NOW</button>
                </div>
                <div className='home_second_right'>
                    <img src="https:pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/" alt='llll'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Page