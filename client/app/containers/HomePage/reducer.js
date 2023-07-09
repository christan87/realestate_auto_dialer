/*
* Homepage reducer
*/

import { 
    DEFAULT_ACTION,
    ADD_CONTACT,
    UPLOAD_CONTACT,
    FETCH_CONTACT
 } from './constants';

const initialState = {
    contactData: {},
    contacts: []
};

const homepageReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case DEFAULT_ACTION:
            return newState;
        case UPLOAD_CONTACT: 
            return {
                contactData:{
                    ...state,
                    ...action.payload
                }
            };
        case FETCH_CONTACT:
            return {
                ...state, 
                contacts: action.payload
            }
        default:
            return state;
    }
};

export default homepageReducer;