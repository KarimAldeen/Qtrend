'use client'
import NavBar from '@/Components/Utils/NavBar'
import FifthComponent from '@/components/Drag/FifthComponent'
import FirstComponent from '@/components/Drag/FirstComponent'
import FourComponent from '@/components/Drag/FourComponent'
import SecondComponent from '@/components/Drag/SecondComponent'
import SixComponent from '@/components/Drag/SixPart/SixComponent'
import ThirdComponent from '@/components/Drag/ThirdComponent'
import React, { useRef, useState } from 'react'
import NextComponent from './NextComponent'
import CurrentComponent from './CurrentComponent'

const Parts = [0, FirstComponent , SecondComponent , ThirdComponent , FourComponent , FifthComponent, SixComponent]
function DragPage() {
    const [currentPart , setCurrentPart] = useState(1)

    const Current = Parts[currentPart]
    const Next = Parts[currentPart+1]
    const currentDiv = useRef(null);
    const nextDiv = useRef(null);

    const handelDrag = ()=> {
            console.log(currentDiv.current)
        currentDiv.current.classList.add('transformToTop')
          setTimeout(()=>{
            currentDiv.current.classList.add('AddDisplayNone')
          },2200)
      
          setTimeout(()=>{
            setCurrentPart(c => c+1) 

          },2200)
        //   nextDiv.classList.add('transformToTop')
          
        }
  
  return (
    <div>
        <CurrentComponent div={currentDiv} handelDrag={handelDrag} >
            {Current}
        </CurrentComponent>
        <NextComponent div={nextDiv} IncreamentCurrent={setCurrentPart}  >
            {Next}
        </NextComponent>
    </div>
  )
}

export default DragPage

