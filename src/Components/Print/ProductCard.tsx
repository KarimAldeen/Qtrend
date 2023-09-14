'use client '
import React , {ReactNode} from 'react'
 import ShopIcon from './Icon/ShopIcon'
import { BaseURL } from '../../api/config'
import { useTranslation } from 'react-i18next'
import ShopIconCartBackGround from './Icon/ShopIconCartBackGround'
type ProductCardProps =  {
    id:number 
    name :string  
    image :string,
    from_price:string,
    to_price :string,
    quick_overview:string,
    index:number

}
function ProductCard({name , id , image  ,quick_overview , from_price , to_price ,index = 0}:ProductCardProps) {
    const is_odd  = index %2 == 1 
    const t   = useTranslation()
  return (
    <div className='product_card' style={{background:is_odd ? "black" :'#FFF'}}>
         {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BaseURL + image} alt="Product IMage " />

        <h2 className='produc_name' style={{color:is_odd ? '#F4F4F4' :"black"}}>{name}</h2>

        <div className='card-body' style={{color:is_odd ? '#F4F4F4' :"black"}}>
                <div>
                    <p className='quick_overview'>{quick_overview}</p>
                    <p className='price'>From <b>{from_price} QR</b></p>
                    <p className='price'>To <b>{to_price} QR</b></p>
                </div>
                <div className='add_to_cart_container'>
                    <ShopIconCartBackGround/>
                    <div className='cart_body_button'>
                        <p>Add to Cart</p>
                        <ShopIcon />
                    </div>
                </div>
        </div>


    </div>
  )
}

export default ProductCard