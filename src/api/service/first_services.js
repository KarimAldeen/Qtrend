import { useGetQuery } from "../helpers/useGetQuery"




const KEY  =  "SERVICE"


const API ={
    GETFIRST:`/api/all-services?_start=0&_end=4`,
    GETTHIRD:`/api/all-services?_start=5&_end=6`,
    GETFOURTH:`/api/all-services?_start=7&_end=9`


}

export const useGetFirstService = ()=> useGetQuery(KEY +1 ,API.GETFIRST)
export const useGetThirdService = ()=> useGetQuery(KEY+2 ,API.GETTHIRD)
export const useGetFourthService = ()=> useGetQuery(KEY +3,API.GETFOURTH)