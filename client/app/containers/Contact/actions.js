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
            //const response = await axios.post(`/api/fonoster/send-text`, text);
        } catch (error) {
            console.log(`containers>Contact>actions>sendMessage>Error: ${error}`)
        }
    }
}

export const autoResponseEmail = (contact, sender) => {
    return async () =>{
        try {
            const email = {
                recipient: `${contact.email1}`,
                sender: sender,
                data: {
                    firstName: contact.owner1FirstName, 
                    lastName: contact.owner1LastName,
                    address:`${contact.fullMailAddress} ${contact.fullSiteAddress} ${contact.mailAddressState} ${contact.mailAddressZip}`
                }
            };     
            return await axios.post(`/api/email/auto-response`, {email:email});
        } catch (error) {
            console.log(`containers>Contact>actions>autoResponseEmail>Error: ${error}`)
        }
    }
}

export const autoResponse = (contact, sender, recipient) => {
    return async () => {
        try {

            const email = {
                recipient: `${contact.email1}`,
                sender: sender,
                data: {
                    firstName: contact.owner1FirstName, 
                    lastName: contact.owner1LastName,
                    address:`${contact.fullMailAddress} ${contact.fullSiteAddress} ${contact.mailAddressState} ${contact.mailAddressZip}`
                }
            };     
            await axios.post(`/api/email/auto-response`, {email:email});
            const data = {
                contact: contact,
                recipient,
            };
            await axios.put(`/api/twilio/send-auto-text`, data);
            
        } catch (error) {
            console.log(`containers>Contact>actions>autoResponsed>Error: ${error}`)
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