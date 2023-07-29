import { NavLinks } from '@/config/NavBarConfig'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

function NavBar() {
  return (
    <div className='NavBar'>
          <Logo />
          <div className='Links'>
            {
              NavLinks?.map((i, index) => (
                <Link key={index} href={i?.href}  >{i?.name}</Link>

              ))
            }
            <span>AR</span>
          </div>

        </div>
  )
}

export default NavBar