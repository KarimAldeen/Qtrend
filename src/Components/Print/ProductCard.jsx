'use client '
import React , {ReactNode} from 'react'
 import ShopIcon from './Icon/ShopIcon'
import { BaseURL } from '../../api/config'
import { useTranslation } from 'react-i18next'
import ShopIconCartBackGround from './Icon/ShopIconCartBackGround'
import { useRouter } from 'next/navigation'
import AddToCartButton from './AddToCartButton'
import useManageCart from '../../zustand/cart'
import {TranslateObject} from '../../Utils/TranslateObject'
function ProductCard({name  , image  ,quick_overview , from_price , id ,  to_price ,translate ,index = 0  }) {
    const {addProductToCart} = useManageCart()
    const is_odd  = index %2 == 1 
    const {t ,i18n}   = useTranslation()
    const route = useRouter()
    const handelGoToSingleProduct = ()=>{
      route.push('/SingleProduct?product_id='+ id)
    }
    // console.log(translate);
  return (
    <div className='product_card'
     style={{background:is_odd ? "black" :'#FFF'}}>
         {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BaseURL +image} alt="Product IMage "   onClick={handelGoToSingleProduct}/>

        <h2 className='produc_name' style={{color:is_odd ? '#F4F4F4' :"black"}}  onClick={handelGoToSingleProduct} >{name}</h2>
        <h2 className='produc_name' style={{color:is_odd ? '#F4F4F4' :"black"}}  onClick={()=> route.push('/SingleProduct')} >{TranslateObject(translate,i18n.language , 'name' )} </h2>

        <div className='card-body' style={{color:is_odd ? '#F4F4F4' :"black"}}   onClick={handelGoToSingleProduct}>
                <div className='card-body-left'>
                    <p className='quick_overview'>{quick_overview}</p>
                    <p className='price'>From <b>{from_price} QR</b></p>
                    <p className='price'>To <b>{to_price} QR</b></p>
                </div>
        </div>
        <AddToCartButton onClick={()=>addProductToCart({
          id,
          quantity:1,
          price:to_price,
          image:image,
          name:name
        })} />
    </div>
  )
}

export default ProductCard  