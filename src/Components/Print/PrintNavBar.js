import React from 'react'
import Link from 'next/link'
import {FiMail} from 'react-icons/fi'
import {MdOutlineShoppingBag, MdKeyboardArrowDown} from 'react-icons/md'
const PrintNavBar = () => {
  return (
    <div className='PrintNavBar'>
        <div className='print_links'>
            <div><Link className='Link' href={'/Print'}>ALL PRINTS</Link></div>
            <div className='link_with_arrow'>
                <Link className='Link'  href={'/PrintCategory'}>PAPER PRINTS 
            <MdKeyboardArrowDown/>
                </Link>
            </div>
            <div className='link_with_arrow'>
                <Link className='Link'  href={'/PrintCategory'}>PAINTING AND STICKERS
            <MdKeyboardArrowDown/>
                </Link>
            </div>
            <div className='link_with_arrow'>
                <Link className='Link'  href={'/PrintCategory'}>ADVERTISING PRODUCTS
            <MdKeyboardArrowDown/>
                </Link>
            </div>

        </div>
        <div className='print_icons' style={{zIndex:"999"}}>
        <span className='notifictaion_circle'>99</span>
            <a href='/MyCart'>
                     <MdOutlineShoppingBag/>
            </a>
       
        </div>
    </div>
  )
}

export default PrintNavBar