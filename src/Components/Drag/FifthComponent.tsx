'use client'
import React, { ReactNode } from 'react'

function FifthComponent({handelDrag , div}):ReactNode {
 
  return (
    <div className='fifth-component' ref={div} onDrag={handelDrag} >
        
          hello freigfreij
    </div>
  )
}

export default FifthComponent