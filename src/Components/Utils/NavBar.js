'use client'
import { NavLinks } from '../../config/NavBarConfig'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import BtnTranslate from './BtnTranslate'
import { useTranslation } from 'react-i18next'
function NavBar() {
  const [t] = useTranslation();

  return (
    <div className={`NavBar`}>
          <Logo />
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

export default NavBar