import React from 'react'
import Logo2 from '../../../public/Logo_Qtrend2.png'
import { NavLinks } from '../../config/NavBarConfig'
import Image from 'next/image'
import Link from 'next/link'
const NavBar2 = () => {
  return (
    <div className='NavBar'>
          <Image style={{width:"9vw",height:"3vw"}} src={Logo2}/>
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

export default NavBar2