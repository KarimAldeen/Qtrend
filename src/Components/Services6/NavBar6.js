'use client'
import { NavLinks } from '../..//config/NavBarConfig'
import Link from 'next/link'
import React from 'react'
import Logo6 from './Logo6'
import BtnTranslate from '../Utils/BtnTranslate'
import { useTranslation } from 'react-i18next'

function NavBar6() {
  const [t] = useTranslation()
  return (
    <div className={`NavBar NavBar6`}>
          <Logo6 />
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

export default NavBar6