import React from 'react'
import NavBar from '../Utils/NavBar'
import Home1_BG from './Home1_BG'

const Home1 = () => {
  return (
    <div className='Home'>
    <NavBar />
    <h2 className='HomeCenter_h'>We Boost Businesses Success</h2>
    <button className='HomeCenter_button'>Lets get in touch!</button>
    <Home1_BG />

  </div>
  )
}

export default Home1