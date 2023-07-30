'use client'
import React, { useRef, useState } from 'react';
import FirstComponent from '@/components/Drag/FirstComponent';
import SecondComponent from '@/components/Drag/SecondComponent';
import ThirdComponent from '@/components/Drag/ThirdComponent';
import FourComponent from '@/components/Drag/FourComponent';
import FifthComponent from '@/components/Drag/FifthComponent';
import SixComponent from '@/components/Drag/SixPart/SixComponent';

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

