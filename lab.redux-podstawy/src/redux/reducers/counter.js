/**
 * Tutaj zaimplementuj reducer do aplikacji counter
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default counterReducer;
 */
import {INCREMENT, DECREMENT} from '../actions/counterActions'
function counterReducer(state, action) {
    if(action.type === INCREMENT){
        return  state + action.payload
    }

    if(action.type === DECREMENT){
        return  state - action.payload
    }
    return state
}

export default counterReducer;