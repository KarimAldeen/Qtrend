import React from 'react'
import ShopIconCartBackGround from './Icon/ShopIconCartBackGround'
import ShopIcon from './Icon/ShopIcon'

function AddToCartButton() {
  return (
    <div className='add_to_cart_button'>
    <ShopIconCartBackGround/>
    <div className='add_To_cart_button_body'>
        <p>Add to Cart</p>
        <ShopIcon />
    </div>
</div>
  )
}

export default AddToCartButton