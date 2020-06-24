import { combineReducers } from "redux";
import { GET_QUOTE, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE,ADD_FAV } from "./actions";
const initialState = {
  loadingX: false,
  error: "",
  quote: null,
};
function quoteReducer(state = initialState, action) {
  if (action.type === GET_QUOTE) {
    return {
      ...state,
      loadingX: true,
    };
  }
  if (action.type === GET_QUOTE_SUCCESS) {
    return {
      ...state,
      loadingX: false,
      quote: action.payload,
    };
  }
  if (action.type === GET_QUOTE_FAILURE) {
    return {
      ...state,
      loadingX: false,
      error: action.payload,
    };
  }
  return state;
}

function favoriteReducer(state=[],action){
    
    if(action.type===ADD_FAV){
        console.log(action)
        return [...state,action.payload]
    }
    
    
    return state;
}

export default combineReducers({
  quoteY: quoteReducer,
  favorite:favoriteReducer
});