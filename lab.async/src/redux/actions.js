// Plik z akcjami
import api from "../api";
const GET_QUOTE = "GET_QUOTE";
const GET_QUOTE_SUCCESS = "GET_QUOTE_SUCCESS";
const GET_QUOTE_FAILURE = "GET_QUOTE_FAILURE";
const ADD_FAV = 'ADD_FAV'

const addFav= (quote)=>{
return{
  type:ADD_FAV,
  payload:quote
}
}

const getQuote = () => {
  return {
    type: GET_QUOTE,
  };
};
const getQuoteSuccess = (response) => {
  return {
    type: GET_QUOTE_SUCCESS,
    payload: response,
  };
};
const getQuoteFailure = (error) => {
  return {
    type: GET_QUOTE_FAILURE,
    payload: error,
  };
};
const fetchQuote = () => (dispatch) => {
  console.log("fetch");
  dispatch(getQuote());
  api
    .fetchQuote()
    .then((res) => {
      dispatch(getQuoteSuccess(res));
    })
    .catch((err) => {
      dispatch(getQuoteFailure(err));
    });
};
export {
  GET_QUOTE,
  GET_QUOTE_FAILURE,
  GET_QUOTE_SUCCESS,
  getQuote,
  getQuoteFailure,
  getQuoteSuccess,
  fetchQuote,
  ADD_FAV,
  addFav
};