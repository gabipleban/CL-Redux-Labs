import { combineReducers } from "redux";
import { ADD_ARTICLE, ADD_USER } from "./actions";

function articleReducer(state = [], action) {
  console.log("articleReducer");
  if (action.type === ADD_ARTICLE) {
    return [...state, action.payload];
  }
  return state;
}

const initialState = { jan: 0, gosia: 0 };

function usersReducer(state = initialState, action) {
  console.log("usersReducer");
  if (action.type === ADD_USER) {
    console.log("Adduser", action, state);
    return { ...state, [action.payload]: 0 };
  }
  if (action.type === ADD_ARTICLE) {
    console.log(action.payload.userId);
    return {
      ...state,
      [action.payload.userId]: state[action.payload.userId] + 1,
    };
  }
  return state;
}

export default combineReducers({
  usersGlobal: usersReducer,
  articlesGlobal: articleReducer,
});

//****************** */

// let global = {
//     usersGlobal: { jan: 0, gosia: 0 },
//     articlesGlobal: []
// }
