"use client"
import React from 'react'
import TopHeader  from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar'
import { MdOutlineShoppingBag } from 'react-icons/md'
const MyCart = () => {
  return (
    <>
      <TopHeader/>
      <PrintNavBar/>
      <div className='MyCart'>
        <div className='MyCart_page'>
          <span className='home_word'>Home  {'>'}</span>
          <span className='MyCart_word'>  My Cart</span>
          <div className='Header'>
            <p>My Cart</p>
            <MdOutlineShoppingBag/>
          </div>
        </div>
      </div>

    </>

  )
}

export default MyCart