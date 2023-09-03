import {useAddMutation} from '../helpers/useAddMutation'
import {useGetQuery} from '../helpers/useGetQuery'

const API = {
    SEND_MESSAGE: `/api/send`,
    GET: `/api/static-informations`,

};


const KEY = 'SEND_MESSAGE'

export const useSendMessage = () => useAddMutation(KEY, API.SEND_MESSAGE);

export const useGetALlStatics = () => useGetQuery(KEY, API.GET); 