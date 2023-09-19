'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {FiMail} from 'react-icons/fi'
import {MdOutlineShoppingBag, MdKeyboardArrowDown} from 'react-icons/md'
import { useGetAllCategory } from '../../api/category'
import useManageCart from '../../zustand/cart'
const PrintNavBar = () => {
    const {data} = useGetAllCategory()
    const {cart} = useManageCart()
    const [length , setLength] = useState(0)
    useEffect(()=>(
      setLength(cart?.length)
    ),[cart])
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
        <span className='notifictaion_circle'>{length || 0}</span>
            <Link href='/MyCart'>
                     <MdOutlineShoppingBag/>
            </Link>
       
        </div>
    </div>
  )
}

export default PrintNavBar