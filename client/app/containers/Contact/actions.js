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
            //const response = await axios.put(`/api/twilio/send-text`, text);
            const response = await axios.post(`/api/fonoster/send-text`, text);
        } catch (error) {
            console.log(`containers>Contact>actions>sendMessage>Error: ${error}`)
        }
    }
}

export const initiateCall = recipient => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get('/api/twilio/call?recipient=' + recipient);

            //const response = await axios.post('/api/twilio/twiml-call', {recipient});
            // if(response.status === 200){
            //     console.log('Call Initiated')
            // } else {
            //     console.error('Failed to initiate call')
            // }
        } catch (error) {
            console.error('Error occurred while initiating call', error);
        }
    }
}

export const endCall = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post('/api/twilio/end-call');
            // if(response.status === 200){
            //     console.log('Call Ended')
            // } else {
            //     console.error('Failed to end call')
            // }
        } catch (error) {
            console.error('Error occurred while ending call', error);
        }
    }
}