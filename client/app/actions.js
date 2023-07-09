/*
* actions.js
* actions config
*/ 

import { bindActionCreators } from 'redux';

import * as application from './containers/Application/actions';
import * as homepage from './containers/HomePage/actions';
import * as contact from './containers/Contact/actions'
export default function (dispatch) {
    return bindActionCreators(
        {
            ...application,
            ...homepage,
            ...contact
        },
        dispatch
    );
}