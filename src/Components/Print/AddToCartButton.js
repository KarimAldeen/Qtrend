import React from 'react'
import ShopIconCartBackGround from './Icon/ShopIconCartBackGround'
import ShopIcon from './Icon/ShopIcon'

function AddToCartButton({onClick}) {
  return (
    <div className='add_to_cart_button' onClick={onClick}>
    <ShopIconCartBackGround/>
    <div className='add_To_cart_button_body'>
        <p style={{color:"black"}}> Add to Cart</p>
        <div className='AddToCardIcon'>
        <ShopIcon />

        </div>
    </div>
</div>
  )
}

export default AddToCartButton