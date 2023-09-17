'use client'
import React from 'react'
import TopHeader from '../../Components/Print/TopHeader'
import PrintNavBar from '../../Components/Print/PrintNavBar'
import CircleServiceFifth from '../../Components/Services/CircleServiceFifth'
import CategorySlider  from '../../Components/Print/CategorySlider'
import ProductCategoryContainer  from '../../Components/Print/ProductCategoryContainer'
const data = [
  {
    id:"1",
    name:"Car Wrap",
    image:"/Print/card/1.png",
    quick_overview:"",
    from_price:"150",
    to_price:'30'
  },
  {
    id:"2",
    image:"/Print/card/2.png",
    name:"Banner Panels",
    quick_overview:"Top quality brochures in Qatar ",
    from_price:"150",
    to_price:'30'
  },
  {
    id:"3",
    name:"Car Wrap",
    image:"/Print/card/1.png",
    quick_overview:"Top quality brochures in Qatar",
    from_price:"150",
    to_price:'30'
  },
  {
    id:"4",
    image:"/Print/card/2.png",
    name:"Banner Panels",
    quick_overview:"Top quality brochures in Qatar",
    from_price:"150",
    to_price:'30'
  },
  {
    id:"5",
    name:"Car Wrap",
    image:"/Print/card/1.png",
    quick_overview:"Top quality brochures in Qatar",
    from_price:"150",
    to_price:'30'
  },
  {
    id:"6",
    image:"/Print/card/2.png",
    name:"Banner Panels",
    quick_overview:"Top quality brochures in Qatar",
    from_price:"150",
    to_price:'30'
  },
  {
    id:"7",
    name:"Car Wrap",
    image:"/Print/card/1.png",
    quick_overview:"Top quality brochures in Qatar",
    from_price:"150",
    to_price:'30'
  },
  {
    id:"8",
    image:"/Print/card/2.png",
    name:"Banner Panels",
    quick_overview:"Top quality brochures in Qatar",
    from_price:"150",
    to_price:'30'
  },
]
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