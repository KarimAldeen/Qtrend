'use client'
import { NavLinks } from '../../config/NavBarConfig'
import Link from 'next/link'
import React, { useState } from 'react'
import BtnTranslate from './BtnTranslate'
import { useTranslation } from 'react-i18next'
import MenuService from '../ui/Menu'
import useHover from '../../hooks/useHover'
import {BiSearch} from 'react-icons/bi'

import NavResponsive from '../Utils/NavResponsive'
import useGetWidth from '../../hooks/useGetWidth'
import { MdOutlineLegendToggle } from 'react-icons/md'
function NavBar3() {
  const [t] = useTranslation();
  const { isHovered ,handleMouseEnter , handleMouseLeave} = useHover()
  const [isActive , setIsActive ] = useState(false)
  const width = useGetWidth()
  return (
    <>
    <div className='NavBar3   '>
        <img alt='logo-image'  src={'/Logo_Qtrend2.png'} />
          <NavBarSearch />
          {
            width  < 800 ? <div style={{color:"white" , marginInline:"60px"}} onClick={()=>setIsActive(v => !v)}> <MdOutlineLegendToggle/></div> :
          <div className='Links3' >
            <div className='In_Link3'> 
            <Link  href={'/'}  >{t('HOME')}</Link>
                <Link  href={'/services?param=1'}  onMouseEnter={()=>handleMouseEnter()} >{t('OUR SERVICES')}</Link>
                <Link href={'/Print'}  >{t("Print")}</Link>             
                <Link  href={'/works'}  >{t("OUR WORKS")}</Link>

                {
                  isHovered &&
                  <MenuService handleMouseLeave={handleMouseLeave}  t={t}/>
                }
                <Link  href={'/about_us'}  >{t('ABOUT US')}</Link>
                <Link  href={'/meet_us'}  >{t('MEET US')}</Link>
            </div>
           
            <BtnTranslate/>
          </div>  
         
        } 
   </div>
    {
      width < 800 &&
   <ul className={isActive ? "nav-menu-nav-6 active-nav-6" : "nav-menu-nav-6"}>
            <div className='Links3-2'>
                <div className='In_Link3'> 
                <Link  href={'/'}  >{t('HOME')}</Link>
                    <Link  href={'/services?param=1'}  onMouseEnter={()=>handleMouseEnter()} >{t('OUR SERVICES')}</Link>
                    <Link href={'/Print'}  >{t("Print")}</Link>             
                    <Link  href={'/works'}  >{t("OUR WORKS")}</Link>

                    {
                      false &&
                      <MenuService handleMouseLeave={handleMouseLeave}  t={t}/>
                    }
                    <Link  href={'/about_us'}  >{t('ABOUT US')}</Link>
                    <Link  href={'meet_us'}  >{t('MEET US')}</Link>
                </div>
              
                <BtnTranslate/>
              </div>  
          </ul>
  }
   
   </>
  )
}

export default NavBar3

function NavBarSearch(){

  return <div className='search_input'>
  <input />
  <BiSearch/>
  </div>
}