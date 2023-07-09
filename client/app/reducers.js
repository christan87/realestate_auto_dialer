/*
* reducers.js
* reducers configuration
*/ 

// import dependencies
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as notifications } from 'react-notification-system-redux';

// import reducers

import applicationReducer from './containers/Application/reducer';
import homepageReducer from './containers/HomePage/reducer';
import contactReducer from "./containers/Contact/reducer";

const createReducer = history => 
    combineReducers({
        router: connectRouter(history),
        notifications,
        application: applicationReducer,
        homepage: homepageReducer,
        contact: contactReducer
    });

export default createReducer;