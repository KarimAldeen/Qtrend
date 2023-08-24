import React from 'react'

import FirstService from './Service'
function Page(props) {
  const Params =  props?.searchParams?.param

  


  
  return (
    <FirstService param={Params}/>
  )
}

export default Page