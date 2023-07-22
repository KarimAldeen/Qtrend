import { NavLinks } from '@/config/NavBarConfig'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='NavBar'>
          <Image src='../Logo_Qtrend.svg' alt='logo' width={30} height={30} />
          {/* <img src='../Logo_Qtrend.svg' alt='logo'  /> */}

          <div className='Links'>
            {
              NavLinks?.map((i, index) => (
                // <Link key={index} href={i} className={router?.pathname === i ? "Active_Links" : ""} >{i}</Link>
                <Link key={index} href={i?.href}  >{i?.name}</Link>

              ))
            }
            <span>AR</span>
          </div>

        </div>
  )
}

export default NavBar