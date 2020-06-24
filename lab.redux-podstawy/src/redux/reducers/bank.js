/**
 * Tutaj zaimplementuj reducer do aplikacji bankApp
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default bankReducer;
 */ 
import {WITHDRAW, DEPOSIT} from "../actions/bank";


function takeMoney(state = 0, action) {
    if(action.type === WITHDRAW){
        const newSald = state - action.payload
        return newSald >= 0 ? newSald: 0;
    }

    if(action.type === DEPOSIT){
        return  state + action.payload
    }
    return state
}

export  default  takeMoney;

