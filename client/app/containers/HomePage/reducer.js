/*
* Homepage reducer
*/

import { 
    DEFAULT_ACTION,
    ADD_CONTACT,
    UPLOAD_CONTACT
 } from './constants';

const initialState = {
    contactData: {}
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
        default:
            return state;
    }
};

export default homepageReducer;