
import { BaseURL } from './config'
import {useGetQuery} from  './helpers/useGetQuery'

const KEY = 'SOCIAL_MEDIA'



const API = {
    GET :`api/all-social-media`
}


export const useGetAllSocialMedia = ()=> useGetQuery(KEY , API.GET)



// for ssr 
export const getAllSocialMedia =async ()=>{
    const data =await fetch(BaseURL + API.GET)
    const res = await data.json()

    return res
}