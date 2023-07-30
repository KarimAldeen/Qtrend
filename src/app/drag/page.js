'use client'
import React, { useRef, useState } from 'react';
import CurrentComponent from './CurrentComponent';
import NextComponent from './NextComponent';
import FirstComponent from '@/Components/Drag/FirstComponent';
import SecondComponent from '@/Components/Drag/SecondComponent';
import ThirdComponent from '@/Components/Drag/ThirdComponent';
import FourComponent from '@/Components/Drag/FourComponent';
import FifthComponent from '@/Components/Drag/FifthComponent';
import SixComponent from '@/Components/Drag/SixPart/SixComponent';

function DragPage() {
  

  


  
  return (
    <div>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourComponent/>
        <FifthComponent/>
        {/* <SixComponent/> */}
    </div>
  );
}

export default DragPage;











// const handleDragStart = () => {
//     console.log('hello world')
//     currentDiv.current.classList.add('transformToTop');
//     setTimeout(() => {
//         setCurrentPart(c => c+1)
//     //   currentDiv.current.classList.add('AddDisplayNone');
//     }, 2200);


//     // setTimeout(()=>{
//     //   setCurrentPart(c => c+1)

//     // },3000)
//     // nextDiv.current.classList.add('AddDisplayBlock');
//   };

