// Miejsce na reducer
import React from 'react';
import { combineReducers} from "redux";
import {START_ROCKET, start, COUNTER} from './actions'


const initialState = {
    launched: false,
    counter: 5
}

const reducer = (state = initialState, action ) => {

    if ( action.type === START_ROCKET){
        return {
            ...state,
            launched: true,
            counter: 0
        }
    }
    if(action.type === COUNTER){
        return {
            ...state,
            counter: action.payload
        }
    }

    return state;
}



export default reducer
