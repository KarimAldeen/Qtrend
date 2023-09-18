"use client"
import React from 'react'
import TopHeader  from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { Footer } from '../../Components/Home'
import CopyRight from '../../Components/Utils/CopyRight'
import  {useRouter} from 'next/navigation'
const MyCart = () => {
  // const GetCheckout =
  const route  = useRouter()
   
  return (
    <>
      <TopHeader/>
      <PrintNavBar/>
      <div className='MyCart'>
      <div className='MyCart_container'>
                        <h1 className='location_page'>Home {">"} <span> My Cart</span></h1>
                        <div className='header'>
                        <h1 className='header_page'>My Cart</h1>
                        <MdOutlineShoppingBag/>
                        </div>
                        <div className='steps_pay'>
                                <div className='first-level'>
                                    <span className='circle'>
                                        1
                                    </span>
                                    <span>
                                        MyCart
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
                        <div className='edit_product'>
                          <span className='span1'></span>
                          <div className='sec'>
                          <div className='left_sec'>
                            <div className='left_left'>
                              <img src={'/Print/Rectangle 9629.png'}/>
                            </div>
                            <div className='right_left'>
                              <p className='right_left_first'>Business Cards</p>
                              <p className='right_left_second'>Quantity : 100</p>
                              <p className='right_left_third'> 150.00 Qr</p>
                            </div>
                          </div>
                          <div className='right_sec'>
                            X
                          </div>
                          </div>
                          <span className='span2'></span>
                        </div>

                        <div className='summary'>
                          <p className='summary_title'>Summary</p>
                          <div className='summary_total'>
                            <p className='total'>Total</p>
                            <p className='price'>150.00 Qr</p>
                          </div>
                          <button className='Checkout_button' onClick={()=>route.push('/Checkout')}>Checkout</button>
                          {/* <a href='/Print'> */}
                          <p className='summary_continue' onClick={()=> route.push('/Print')}>Continue Shopping</p>
                          {/* </a> */}
                        </div>
                   </div>
      </div>
      <Footer/>
      <CopyRight/>
    </>

  )
}

export default MyCart