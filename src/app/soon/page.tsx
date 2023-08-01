'use client'
import React, { ReactNode } from 'react'
import Timer from '../../components/soon/Timer'
import Optin from '../../components/soon/Optin'
import Preloader from '../../components/soon/Preloader'
function Soon():ReactNode {
    return (
        <div className='all'>
  <div className="soonpage">
          <div className="container">
            <h1 className='soon-header'>
              Page
              <br />
              Coming Soon
            </h1>
            <Timer />
            {/* <Optin /> */}
            <Preloader />
          </div>
        </div>
        </div>
      
      );
}

export default Soon