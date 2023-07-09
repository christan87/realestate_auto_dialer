/*
* Homepage actions
*/
import axios from "axios";

import { 
    DEFAULT_ACTION, 
    MESSAGE_CONTACT
} from './constants';


export const defaultAction = () => {
    return{
        type: DEFAULT_ACTION
    };
};

export const sendMessage = (text) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.put(`/api/twilio/send-text`, text);
        } catch (error) {
            console.log(`containers>Contact>actions>sendMessage>Error: ${error}`)
        }
    }
}