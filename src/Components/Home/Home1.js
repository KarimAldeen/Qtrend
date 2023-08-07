import React from 'react'
import NavBar from '../Utils/NavBar'
import Home_BG from './Home_BG'

const Home1 = ({t}) => {
  return (
    <div className='Home'>
    <NavBar />
    <h2 className='HomeCenter_h'>{t("We Boost Businesses Success")}</h2>
    <button className='HomeCenter_button'>{t("Lets get in touch!")}</button>
    <Home_BG/>

  </div>
  )
}

export default Home1