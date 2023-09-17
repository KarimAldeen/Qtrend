"use client"
import React from 'react'
import TopHeader from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar';
import { useGetALlStatics } from '../../api/ContactUs/Contact';
import CategorySection from '../../Components/Print/CategorySection';
import PrintLastSection from '../../Components/Print/PrintLastSection'
import  Footer  from '../../Components/Utils/Footer';
import CopyRight from '../../Components/Utils/CopyRight'
import CategoryHoemSectionWithProduct from '../../Components/Print/CategoryHomeSectionWIthProduct';
import { data } from '../../Components/Print/data/Products';
const Page = () => {
  const per_page = 2
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
                    <img src={'/Print/Prints.png'} alt='prints'/>
                </div>
            </div>
        </div>

        <div className='category_product'>

          {
            data?.map((row ,index) =>(
              
              <CategoryHoemSectionWithProduct color="#43A7D3"  key={index} products={data?.slice(index*per_page , index*per_page +per_page)}  index={index} />
              ))
            }
      </div>
            <PrintLastSection/>
            <Footer/>
            <CopyRight/>
    </div>
  )
}

export default Page