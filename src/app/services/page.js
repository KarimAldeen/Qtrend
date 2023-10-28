import React from 'react'
import FirstService from './Service'
import { getFirstService, getFourthService, getThirdService } from '../../api/service/first_services'



 function  Page() {
  

  
    const {data }  = getFirstService()  
    const {data:data2}  = getThirdService()  
    const {data:data3 }  = getFourthService()  

  return (
    
    <FirstService data={data}  data2={data2}  data3={data3} />
  )
}

export default Page