'use client'
import React from 'react'
import TopHeader from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar'

function page() {
  return (
    <>
    
    <TopHeader />
    <PrintNavBar/>
    <div  className='checkout_page'>
            <div className='checkout_body'>
                   <div className='checkout_container'>
                        <h1 className='location_page'>Home {">"}  My Cart {">"}  <span>Checkout</span></h1>
                        <h1 className='header_page'>Checkout</h1>
                        <div className='steps_pay'>
                                <div className='first-level'>
                                    <span className='circle'>
                                        1
                                    </span>
                                    <span>
                                        My Cart
                                    </span>
                                </div>
                                <div className='mid-level'> 

                                </div>
                                <div className='last-level'>
                                <span className='circle'>
                                        2
                                    </span>
                                    <span>
                                        Checkout
                                    </span>
                                </div>
                        </div>
                   </div>
            </div>
    </div>
    </> 
  )
}

export default page