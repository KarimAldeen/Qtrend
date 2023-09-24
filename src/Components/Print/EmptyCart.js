import React from 'react'
import TopHeader from './TopHeader'
import PrintNavBar from './PrintNavBar'
import Footer from '../Utils/Footer'
import CopyRight from '../Utils/CopyRight'
import {BsEmojiFrownFill} from 'react-icons/bs'
import { useRouter } from 'next/navigation'
const EmptyCart = () => {
    const route = useRouter();
  return (
        <div className='EmptyCart_page'>
        
            {/* <TopHeader/> */}
            {/* <PrintNavBar/> */}
            
            <div className='empty_cart'>
                <BsEmojiFrownFill/>
                <p className='empty_cart_text'>Ops.. Your Cart Is <span>Empty!</span></p>
                <div className='return_button' onClick={() => route.push('/Print')} >
                    <p className='return_p'>Return to Print Page</p>
                </div>
            </div>

            <Footer/>
            <CopyRight/>
        </div>
    )
}

export default EmptyCart