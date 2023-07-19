 import Link from 'next/link'
 import React from 'react'
// import HomeBG from '../images/Home/HomeBG.png'
const Page = () => {
  const NavLinks = ["HOME","OUR SERVICES","OUR WORKS","ABOUT US","MEET US"]

  return (
    <>
    <div className='Home'>
      <div className='NavBar'>
        <img src='../Logo_Qtrend.svg' alt='' />
        <div className='Links'>
          {
            NavLinks?.map((i,index)=>(
              // <Link key={index} href={i} className={router?.pathname === i ? "Active_Links" : ""} >{i}</Link>
              <Link key={index} href={i}  >{i}</Link>

            ))
          }
          <span>AR</span>
        </div>
        
      </div>
        <img src="../HomeBG.png"  alt="Image" />
    </div>
    <div className='Home2'>
    {/* <img src="../HomeBG.png"  alt="Image" /> */}

    </div>
    </>
    
  )
}

export default Page