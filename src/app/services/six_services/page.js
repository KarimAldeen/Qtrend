'use client'
import Services6_6_BG from '../../../Components/Services6/Services6_6'
import Services6_4_BG from '../../../Components/Services6/Services6_4_BG'
import Services6_3_BG from '../../../Components/Services6/Services6_3_BG'
import Services6_2_BG from '../../../Components/Services6/Services6_2_BG'
import Services6_1_BG from '../../../Components/Services6/Services6_1_BG'
import React, { useState } from 'react'
import NavBar6 from '../../../Components/Services6/NavBar6'
import { Footer } from '../../../Components/Home'
const page = () => {
  const [ClassName, setClassName] = useState("Drag_Page")
  const handleDragStart = () => {
    setClassName("Drag_Page S6_T1")
  };
  const handleDrag2Start = () => {
    setClassName("Drag_Page S6_T1 S6_T2")

  };
  const handleDrag3Start = () => {
    setClassName("Drag_Page S6_T1 S6_T2 S6_T3")

  };
  const handleDrag4Start = () => {
    setClassName("Drag_Page S6_T1 S6_T2 S6_T3 S6_T4")

  };
  const handleDrag5Start = () => {
    setClassName("Drag_Page S6_T1 S6_T2 S6_T3 S6_T4 S6_T5")

  };

  return (
    <div className={ClassName} id='Drag_Page'  >
      <NavBar6 />
      <div className=' Drag1_Page_Body'>
        <Services6_1_BG />
        <div className='Drag_1_Page_Down' onDrag={handleDragStart} draggable />
        <div className='Drag_2_Page_Down' onDrag={handleDrag2Start} draggable />
      </div>
      <div className=' Drag2_Page_Body'>
        <Services6_2_BG />
        <div className='Drag_3_Page_Down' onDrag={handleDrag3Start} draggable />

      </div>
      <div className=' Drag3_Page_Body'>
        <Services6_3_BG />
        <div className='Drag_4_Page_Down' onDrag={handleDrag4Start} draggable />

      </div>
      <div className=' Drag4_Page_Body'>
        <Services6_4_BG />
        <div className='Drag_5_Page_Down' onDrag={handleDrag5Start} draggable />

      </div>
      <div className=' Drag5_Page_Body'>
        <Services6_6_BG />
        <Footer/>

      </div>
    </div>
  )
}

export default page