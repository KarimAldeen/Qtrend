import React from 'react'

function CurrentComponent({children  , div , handelDrag}) {
    console.log(children)
    return (
        <div ref={div} onDrag={handelDrag} >
            {children}
        </div>
      )
}

export default CurrentComponent