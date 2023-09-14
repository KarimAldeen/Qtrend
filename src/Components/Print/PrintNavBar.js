import React from 'react'
import Link from 'next/link'

const PrintNavBar = () => {
  return (
    <div className='PrintNavBar'>
        <div className='print_links'>
            <div><Link className='Link' href={'/'}>ALL PRINTS</Link></div>
            <div className='link_with_arrow'><Link className='Link'  href={'/'}>PAPER PRINTS</Link></div>
            <div className='link_with_arrow'><Link className='Link'  href={'/'}>PAINTING AND STICKERS</Link></div>
            <div className='link_with_arrow'><Link className='Link'  href={'/'}>ADVERTISING PRODUCTS</Link></div>

        </div>
        <div className='print_icons'>

        </div>
    </div>
  )
}

export default PrintNavBar