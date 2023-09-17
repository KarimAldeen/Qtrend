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
                <Link className='Link'  href={'/Print/PaperPrints'}>PAPER PRINTS 
            <MdKeyboardArrowDown/>
                </Link>
            </div>
            <div className='link_with_arrow'>
                <Link className='Link'  href={'/Print/PaintingAndStickers'}>PAINTING AND STICKERS
            <MdKeyboardArrowDown/>
                </Link>
            </div>
            <div className='link_with_arrow'>
                <Link className='Link'  href={'/Print/PaintingAndStickers'}>ADVERTISING PRODUCTS
            <MdKeyboardArrowDown/>
                </Link>
            </div>

        </div>
        <div className='print_icons'>
        <span className='notifictaion_circle'>99</span>
            <a href='/Print/MyCart'>
            <MdOutlineShoppingBag/>
            </a>
            <FiMail/>
        </div>
    </div>
  )
}

export default PrintNavBar