import React from 'react'
import FirstService from './Service'
import { getFirstService, getFourthService, getThirdService } from '../../api/service/first_services'



 async function  Page() {
  

  
    const {data }  =await getFirstService()  
    const {data:data2}  =await getThirdService()  
    const {data:data3 }  = await getFourthService()  

  return (
    
  
  
    <FirstService data={data}  data2={data2}  data3={data3} />
  )
}

export default Page