'use client'
import React from 'react'
import TopHeader from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar'
import { Footer } from '../../Components/Home'
import CopyRight from '../../Components/Utils/CopyRight'
import {useRouter} from 'next/navigation'

function Page() {
    const data = {
        sub_total:100,
        tax:0 ,
        shipping:20,
        total:120 ,
        products:[
            {
                id:1,
                name:"Business Cards",
                price:100,
                quantity:1
            },
            {
                id:2,
                name:"Business Cards",
                price:100,
                quantity:1
            },
            
        ]
    }
    const route  =  useRouter()
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
                        <div className='checkout_form'>
                            <div className='checkout_left_form'>


                                    <div className='input_top'>
                                        <label>Buyer Info</label>
                                    <input type='text' placeholder=''/>

                                    </div>
                                    <div className='div_mid_input'>
                                    <div  className='input_mid_1'>
                                    <label>Name</label>

                                    <input type='text' placeholder=''/>
                                    </div>
                                    <div className='input_mid_2' >
                                    <label>Phone Number</label>

                                    <input type='text' placeholder=''/>
                                    </div>

                                    </div>
                                    <div>

                                    <div  className='input_bottom'>
                                        <label>Note </label>
                                    <input type='text' placeholder=''/>

                                    </div>
                                    </div>
                            </div>
                            <div className='checkout_rigth_form'>
                                    <h1 className='header'>Your Order Summary</h1>
                                    {
                                        data?.products?.map(product => (
                                            <div key={product.id} className='product_row_quantitiy_price'>
                                                <div className='left'>
                                                    <span>{product.quantity}x</span>      <span>{[product.name]}</span>
                                                </div>
                                                <div className='rigth'>
                                                    {product.price} Qr
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className='total_price_section'>
                                        
                                    <div  className='product_row_quantitiy_price'>
                                                <div className='left'>
                                                    <span>Subtotal</span>   
                                                </div>
                                                <div className='rigth'>
                                                    {data.sub_total} Qr
                                                </div>
                                         </div>
                                         <div  className='product_row_quantitiy_price'>
                                                <div className='left'>
                                                    <span>Shipping</span>   
                                                </div>
                                                <div className='rigth'>
                                                    {data.shipping} Qr
                                                </div>
                                         </div>
                                         <div  className='product_row_quantitiy_price'>
                                                <div className='left'>
                                                    <span>Tax</span>   
                                                </div>
                                                <div className='rigth'>
                                                    {data.tax} Qr
                                                </div>
                                         </div>
                                    </div>
                                    <div>
                                    <div  className='product_full_price'>
                                                <div className='left'>
                                                    <span>Total</span>   
                                                </div>
                                                <div className='rigth'>
                                                    {data.total} Qr
                                                </div>
                                         </div>
                                    </div>
                                    <div className='submit_checkout'>
                                        <h1 className='header'>Payment</h1>

                                        <div  className='cash_button'>
                                            Cash On Delivary
                                        </div>
                                        <div className='checkout_button'>
                                            CHECKOUT
                                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                                <g clip-path="url(#clip0_81_189)">
                                                <path d="M18.7363 36.9949C28.6775 36.9949 36.7363 28.936 36.7363 18.9949C36.7363 9.05375 28.6775 0.994873 18.7363 0.994873C8.7952 0.994873 0.736328 9.05375 0.736328 18.9949C0.736328 28.936 8.7952 36.9949 18.7363 36.9949Z" fill="white"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4032 10.5683C25.2432 8.40825 22.3899 7.23492 19.3232 7.20825C13.0299 7.20825 7.90989 12.3283 7.90989 18.6216C7.90989 20.6216 8.44322 22.5949 9.42989 24.3283L7.80322 30.2483L13.8566 28.6483C15.5366 29.5549 17.4032 30.0349 19.3232 30.0349C25.6166 30.0349 30.7366 24.9149 30.7366 18.6216C30.7366 15.5816 29.5632 12.7283 27.4032 10.5683ZM19.3232 28.1149C17.6166 28.1149 15.9366 27.6616 14.4966 26.7816L14.1499 26.5949L10.5499 27.5283L11.5099 24.0349L11.2699 23.6616C10.3099 22.1416 9.82989 20.4083 9.82989 18.6216C9.82989 13.3949 14.0966 9.12825 19.3232 9.12825C21.8566 9.12825 24.2299 10.1149 26.0432 11.9016C27.8299 13.6883 28.8166 16.0883 28.8166 18.6216C28.8166 23.8749 24.5499 28.1149 19.3232 28.1149ZM24.5232 21.0216C24.2299 20.8883 22.8432 20.1949 22.5766 20.0883C22.3099 19.9816 22.1232 19.9549 21.9366 20.2216C21.7499 20.5149 21.1899 21.1549 21.0299 21.3416C20.8699 21.5283 20.7099 21.5549 20.4166 21.4216C20.1232 21.2883 19.2166 20.9683 18.1232 20.0083C17.2699 19.2616 16.7099 18.3283 16.5232 18.0349C16.3632 17.7416 16.4966 17.6083 16.6566 17.4483C16.7899 17.3149 16.9499 17.1283 17.0832 16.9416C17.2166 16.7816 17.2699 16.6483 17.3766 16.4616C17.4832 16.2749 17.4299 16.1149 17.3499 15.9549C17.2699 15.8216 16.7099 14.4083 16.4699 13.8483C16.2299 13.2883 15.9899 13.3683 15.8299 13.3683C15.6699 13.3683 15.4832 13.3683 15.2699 13.3683C15.0832 13.3683 14.7632 13.4483 14.4966 13.7149C14.2299 14.0083 13.5099 14.7016 13.5099 16.0883C13.5099 17.5016 14.5232 18.8616 14.6832 19.0483C14.8166 19.2349 16.6832 22.1149 19.5632 23.3683C20.2566 23.6616 20.7632 23.8483 21.1899 23.9816C21.8832 24.1949 22.4966 24.1683 22.9766 24.0883C23.5366 24.0083 24.6566 23.3949 24.8966 22.7283C25.1366 22.0616 25.1366 21.5016 25.0566 21.3683C25.0032 21.2349 24.8166 21.1549 24.5232 21.0216Z" fill="#232323"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_81_189">
                                                <rect width="36" height="36" fill="white" transform="translate(0.736328 0.994873)"/>
                                                </clipPath>
                                                </defs>
                                                </svg>
                                        </div>
                                        <p onClick={()=> route.push('/MyCart')} className='back_to_cart'>Back TO Cart</p>
                                    </div>
                            </div>
                        </div>
                   </div>
            </div>
    </div>
    <Footer />
    <CopyRight />
    </> 
  )
}

export default Page