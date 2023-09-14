'use client'
import { NavLinks } from '../../config/NavBarConfig'
import Link from 'next/link'
import React from 'react'
import BtnTranslate from './BtnTranslate'
import { useTranslation } from 'react-i18next'
import MenuService from '../ui/Menu'
import useHover from '../../hooks/useHover'
import {BiSearch} from 'react-icons/bi'

function NavBar3() {
  const [t] = useTranslation();
  const { isHovered ,handleMouseEnter , handleMouseLeave} = useHover()

  return (
    <div className={`NavBar3`}>
          <img alt='logo-image' style={{width:"6vw",height:"2vw"}} src={'/Logo_Qtrend2.png'}/>
          <div className='search_input'>
          <input></input>
          <BiSearch/>
          </div>
          <div className='Links3'>
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
                <Link  href={'meet_us'}  >{t('MEET US')}</Link>
            </div>
           
            <BtnTranslate/>
          </div>

        </div>
  )
}

export default NavBar3