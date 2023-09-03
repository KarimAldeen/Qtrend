import { useGetQuery } from "../helpers/useGetQuery"




const KEY  =  "FIRST_SERVICE"


const API ={
    GET:`/api/all-services?_start=0&_end=4`
}

export const useGetFirstService = ()=> useGetQuery(KEY ,API.GET)