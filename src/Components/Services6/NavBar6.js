import { NavLinks } from '../..//config/NavBarConfig'
import Link from 'next/link'
import React from 'react'
import Logo6 from './Logo6'

function NavBar6() {
  return (
    <div className={`NavBar NavBar6`}>
          <Logo6 />
          
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

export default NavBar6