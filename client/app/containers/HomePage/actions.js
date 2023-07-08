/*
* Homepage actions
*/

import { 
    DEFAULT_ACTION, 
    ADD_CONTACT,
    UPLOAD_CONTACT
} from './constants';

export const defaultAction = () => {
    return{
        type: DEFAULT_ACTION
    };
};

export const uploadContact = (value) => {
    let contactData = {};
    //contactData[name] = value;
    contactData = value;
    return{
        type: UPLOAD_CONTACT,
        payload: contactData
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