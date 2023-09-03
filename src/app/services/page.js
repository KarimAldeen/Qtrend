'use client'
import React from 'react'
import FirstService from './Service'
import { useGetFirstService } from '../../api/service/first_services'
import LoadingPage from '../loading'



 function  Page() {
  

  
    const {data , isLoading}  = useGetFirstService()  


      if(isLoading){
        return <LoadingPage />
      }
      console.log(data)
  return (
    
    <FirstService/>
  )
}

export default Page