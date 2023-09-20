'use client'
// Import necessary modules and components
import React, { useEffect, useState } from 'react';
import TopHeader from '../../Components/Print/TopHeader';
import PrintNavBar from '../../Components/Print/PrintNavBar';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Footer } from '../../Components/Home';
import CopyRight from '../../Components/Utils/CopyRight';
import { useRouter } from 'next/navigation';
import useManageCart from '../../zustand/cart';
import {getTotalPrice} from '../../Utils/CalcFinalPrice' 
import { BaseURL } from '../../api/config';
const MyCart = () => {
  const route = useRouter();
  const {cart ,removeProductFromCart} = useManageCart()

  const [MyCart  ,  setMyCart] = useState([])
  useEffect(()=>{
    setMyCart(cart)
  },[cart])
  const handelGoToCheckout = ()=>{
    route.push('/Checkout')
  }
  return (
    <>
      {/* Display the top header */}
      <TopHeader />
      {/* Display the navigation bar */}
      <PrintNavBar />
      <div className='MyCart'>
        <div className='MyCart_container'>
          {/* Page location */}
          <h1 className='location_page' onClick={()=> route.push('/Print')}>Home {">"} <span> My Cart</span></h1>
          <div className='header'>
            <h1 className='header_page'>My Cart</h1>
            <MdOutlineShoppingBag />
          </div>
          {/* Checkout steps */}
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
              <span className='circle' onClick={handelGoToCheckout}>
                2
              </span>
              <span className='checkout_span' onClick={handelGoToCheckout}>
                Checkout
              </span>
            </div>
          </div>
          {/* Edit product */}
          <div className='product_cart_container'>
          {
            MyCart?.map(item =>(
              <>
            <div className='edit_product' key={item?.id}>
            <span className='span1'></span>
            <div className='sec'>
              <div className='left_sec'>
                <div className='left_left'>
                  <img src={BaseURL + item.image} alt='Product Image' />
                </div>
                <div className='right_left'>
                  <p className='right_left_first'>{item?.name}</p>
                  <p className='right_left_second'>Quantity : {item?.quantity}</p>
                  <p className='right_left_third'>{item?.price} Qr</p>
                </div>
              </div>
              <div className='right_sec'  onClick={()=>removeProductFromCart(item?.id)}>
                X
              </div>
            </div>
            <span className='span2'></span>
          </div>
              </>
            ))
          }
           </div>
          {/* Order summary */}
          <div className='summary'>
            <p className='summary_title'>Summary</p>
            <div className='summary_total'>
              <p className='total'>Total</p>
              <p className='price'>{getTotalPrice(MyCart)} Qr</p>
            </div>
            {/* Checkout and Continue Shopping buttons */}
            <button className='Checkout_button' onClick={() => route.push('/Checkout')}>Checkout</button>
            <p className='summary_continue' onClick={() => route.push('/Print')}>Continue Shopping</p>
          </div>
        </div>
      </div>
      {/* Display the footer */}
      <Footer />
      {/* Display the copyright information */}
      <CopyRight />
    </>
  );
}

export default MyCart;
