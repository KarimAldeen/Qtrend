import {useAddMutation} from '../helpers/useAddMutation'


const API = {
    SEND_MESSAGE: `/api/send`,
};


const KEY = 'SEND_MESSAGE'

export const useSendMessage = () => useAddMutation(KEY, API.SEND_MESSAGE) 