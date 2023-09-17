'use client'
import React from 'react'
import TopHeader from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar'
import CircleServiceFifth from '../../Components/Services/CircleServiceFifth'
import CategorySlider  from '../../Components/Print/CategorySlider'
import ProductCategoryContainer  from '../../Components/Print/ProductCategoryContainer'
import Section from '../../Components/mhmad/Section'
import {data} from '../../Components/Print/data/Products'
function PrintCategory() {

  const per_page =3
  return (
  <>
    <TopHeader/>
    <PrintNavBar/>
    <div className='category-product-page'>
           <div className='header-category-product-page'>
                <div className='left'>
                    <img src='/Print/Refrech.png' />        
                </div>
                <div className='center'>
                    <CategorySlider />
                </div>
                <div className='left'  style={{opacity:"0"}}>
                    <img src='/Print/Refrech.png' />        
                </div>
           </div>
      <Section />

    </div>
    <div className='category_product'>

          {
            data?.map((row ,index) =>(
              
              <ProductCategoryContainer color="#43A7D3"  key={index} products={data?.slice(index*per_page , index*per_page +per_page)}  index={index} />
              ))
            }
      </div>
  </>
  )
}

export default PrintCategory