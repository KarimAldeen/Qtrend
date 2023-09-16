import React from 'react'
import Link from 'next/link'
import {FiMail} from 'react-icons/fi'
import {MdBackpack} from 'react-icons/md'
import {MdKeyboardArrowDown} from 'react-icons/md'
const PrintNavBar = () => {
  return (
    <div className='PrintNavBar'>
        <div className='print_links'>
            <div><Link className='Link' href={'/'}>ALL PRINTS</Link></div>
            <div className='link_with_arrow'>
                <Link className='Link'  href={'/'}>PAPER PRINTS 
            <MdKeyboardArrowDown/>
                </Link>
            </div>
            <div className='link_with_arrow'>
                <Link className='Link'  href={'/'}>PAINTING AND STICKERS
            <MdKeyboardArrowDown/>
                </Link>
            </div>
            <div className='link_with_arrow'>
                <Link className='Link'  href={'/'}>ADVERTISING PRODUCTS
            <MdKeyboardArrowDown/>
                </Link>
            </div>

        </div>
        <div className='print_icons'>
            <MdBackpack/>
            <FiMail/>
        </div>
    </div>
  )
}

export default PrintNavBar