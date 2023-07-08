/*
* actions.js
* actions config
*/ 

import { bindActionCreators } from 'redux';

import * as application from './containers/Application/actions';
import * as homepage from './containers/HomePage/actions';

export default function (dispatch) {
    return bindActionCreators(
        {
            ...application,
            ...homepage,
        },
        dispatch
    );
}