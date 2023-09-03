'use client'
import { NavLinks } from '../../config/NavBarConfig'
import Link from 'next/link'
import React from 'react'
import BtnTranslate from './BtnTranslate'
import { useTranslation } from 'react-i18next'

function NavBar2() {
  const [t] = useTranslation();

  return (
    <div className={`NavBar`}>
          <img alt='logo-image' style={{width:"9vw",height:"3vw"}} src={'/Logo_Qtrend2.png'}/>
          <div className='Links'>
            <div className='In_Link'> 
            {
              NavLinks?.map((i, index) => (
                <Link key={index} href={i?.href}  >{t(i?.name)}</Link>

              ))
            }
            </div>
           
            <BtnTranslate/>
          </div>

        </div>
  )
}

export default NavBar2