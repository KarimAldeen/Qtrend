import NavBar from '@/Components/NavBar'
import React from 'react'
import HUMAN from "../../../public/works/human.png";
import Image from "next/image";


function AboutUs() {
  return (
    <div className='about-us-page'>
      <NavBar/>
      <Image
        width={702}
        height={582}
        className="human"
        src={HUMAN}
        alt="image f"
      />

    </div>
  )
}

export default AboutUs