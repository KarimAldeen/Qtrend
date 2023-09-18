'use client'
import React from 'react'
import TopHeader from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar'
import CircleServiceFifth from '../../Components/Services/CircleServiceFifth'
import CategorySlider  from '../../Components/Print/CategorySlider'
import ProductCategoryContainer  from '../../Components/Print/ProductCategoryContainer'
import Section from '../../Components/mhmad/Section'
import {data} from '../../Components/Print/data/Products'
import { Footer } from '../../Components/Home'
import CopyRight from '../../Components/Utils/CopyRight'
import useGetWidth from '../../hooks/useGetWidth'
import Refreash from '../../Components/Print/Refrech'
import { useParams, useSearchParams } from 'next/navigation'
import { useGetAllProductForCategory } from '../../api/category'
function PrintCategory() {

  const category_id = useSearchParams().get('category_id')
  const {data} = useGetAllProductForCategory({category_id:category_id})
  console.log(data);
  const product = data?.products
  // console.log(category_id);
  const width = useGetWidth()
  
    const per_page =width <500 ?1  : width <800 ?2 :3 
    return (
    <>
      <TopHeader/>
      <PrintNavBar/>
      <div className='category-product-page'>
            <div className='header-category-product-page'>
                  <div className='left'>
                    <Refreash />       
                  </div>
                  <div className='center'>
                      <CategorySlider />
                  </div>
                  <div className='left'  style={{opacity:"0"}}>
                    <Refreash />       
                  </div>
            </div>
        <Section name={data?.name}  image={data?.category_image}  description={data?.description}/>

    </div>
    <div className='category_product'>

          {
            product?.map((row ,index) =>(
              
              <ProductCategoryContainer color={data?.background_color}  key={index} products={product?.slice(index*per_page , index*per_page +per_page)}  index={index} />
              ))
            }
      </div>
      <Footer />
      <CopyRight />
  </>
  )
}

export default PrintCategory