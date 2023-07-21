import React from 'react'
import Home3_Sections from './Home3_Sections'

const Home = () => {
  return (
    <div className='Home3'>
        <div className='Home3_Left'>
                <Home3_Sections/>
                <Home3_Sections/>

        </div>
        <div className='Home3_Right'>
        <Home3_Sections/>

        </div>

    </div>
  )
}

export default Home