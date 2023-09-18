import React from 'react'
import Link from 'next/link'
import {FiMail} from 'react-icons/fi'
import {MdOutlineShoppingBag, MdKeyboardArrowDown} from 'react-icons/md'
import { useGetAllCategory } from '../../api/category'
const PrintNavBar = () => {
    const {data} = useGetAllCategory()
    
  return (
    <div className='PrintNavBar'>
        <div className='print_links'>
            <div><Link className='Link' href={'/Print'}>ALL PRINTS</Link></div>
            {
                data?.category?.map((nav , index) =>(
                    <div className='link_with_arrow' key={nav.id}>
                      <Link className='Link'  href={'/PrintCategory?category_id='+nav.id}>
                        {nav.name} 
                        <MdKeyboardArrowDown/>
                      </Link>
                   </div>
                ))
            }
          

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