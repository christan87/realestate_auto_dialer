/*
* Homepage actions
*/
const xlsx = require('xlsx');
import axios from "axios";

import { 
    DEFAULT_ACTION, 
    ADD_CONTACT,
    UPLOAD_CONTACT
} from './constants';

import {
    contactObj,
    contactObjArr
} from './contactObj';

export const defaultAction = () => {
    return{
        type: DEFAULT_ACTION
    };
};

export const uploadContact = (value) => {
    return async (dispatch, getState) => {
        try {
            let contacts = value.slice(0,21);
            for(let j = 1; j < contacts.length; j++){
                let contactData = {};
                
                contactData = value[j];
                let contactDataObj = contactObj;
                for(let i = 0; i < contactObjArr.length ; i++){
                    if(contactObjArr[i] === '') i++;
                    if(contactData[i] !== undefined){
                        if(i === 48){
                            //xlsx turns dates into corresponding serial numbers and this turns them back
                            contactData[i] = xlsx.SSF.format('m/d/yyyy', contactData[i]);
                        }
                        contactDataObj[contactObjArr[i]] = `${contactData[i]}`;
                    } else {
                        contactDataObj[contactObjArr[i]] = '';
                    }
                }
                const response = await axios.post(`/api/contact/add`, contactDataObj);
            }
            // return{
            //     type: UPLOAD_CONTACT,
            //     payload: contactData
            // }
        } catch (error) {
            console.log(`client>app>containers>HomePage>actions>uploadContact>Error: ${error}`)
        }
    }
}

export const addContact = (contact) => {
    return async (dispatch, getState) =>{
        try {
            
        } catch (error) {
            console.log(`containers>HomPage>actions>addContact>Error: ${error}`)
        }
    }
}