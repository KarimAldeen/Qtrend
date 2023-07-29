import React, { useEffect } from 'react'

function NextComponent({children  , div , IncreamentCurrent}) {

    // useEffect(()=>{ 
    //     IncreamentCurrent(c => c+1)
    // },[])
  return (
    <div ref={div} className='AddDisplayNone'>
        {
            children
        }
    </div>
  )
}

export default NextComponent