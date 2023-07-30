import React from 'react'

import FirstComponent from '@/Components/Drag/FirstComponent';
import SecondComponent from '@/Components/Drag/SecondComponent';
import ThirdComponent from '@/Components/Drag/ThirdComponent';
import FourComponent from '@/Components/Drag/FourComponent';
import FifthComponent from '@/Components/Drag/FifthComponent';
import SixComponent from '@/Components/Drag/SixPart/SixComponent';
const Parts = [0, <FirstComponent />, <SecondComponent />, <ThirdComponent /> , <FourComponent/>, <FifthComponent/>, <SixComponent/>];

function NextComponent({ children,div}) {

  
  return (
    <div ref={div} className='AddDisplayNone'>
      {children}
    </div>
  )
}

export default NextComponent