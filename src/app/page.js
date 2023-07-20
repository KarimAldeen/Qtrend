// import Services_Cards from '@/Components/Services_Cards'
import Link from 'next/link'
import React from 'react'
import one from '../../public/Number/1.svg'
import Services_Cards from '@/components/Services_Cards'
import NavBar from '@/components/NavBar'
const Page = () => {

  return (
    <>
    <NavBar />
      <div className='Home'>
          
        <img src="../HomeBG.png" alt="Image" />
      </div>
      <div className='Home2'>
        <img src="../HomeBG123.png" alt="Image" />
        <div className='Home2_Text'>
          <h2>Welcome</h2>
          <div className='Home2_Text_h1'>
            <h1>
              Extend Your Market Reach by Establishing a Distinct
            </h1>
            <h1>
              Brand Identity and Creating Appealing Marketing Content
            </h1>
          </div>
          <p>
            Engage a Larger Customer Base with a Compelling Brand Identity and a Collection of Visually Striking Marketing Materials.Reach a Broader Customer
            Segment by Crafting a Standout Brand Identity and Compelling Visual Marketing Materials
          </p>
          <button className="btn">Let’s Talk</button>

        </div>
        <div className='Home2_Services'>
          <Services_Cards  Key={1} Number={one} />
          <Services_Cards  Key={2} />
          <Services_Cards  Key={3} />

        </div>
      </div>


    </>

  )
}

export default Page