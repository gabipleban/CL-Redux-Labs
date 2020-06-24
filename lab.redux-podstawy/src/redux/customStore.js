/**
 * Zadanie z wykładowcą
 * Implementacja własnego Store
 */
const createStore = (reducer, initialState) => {
    let currentState = initialState;
    let tab = [];
    return {
        dispatch(action){
            currentState= reducer(currentState, action);
            tab.forEach((el) => el())
        },
        getState(){
            return currentState;
        },
        subscribe(listner){
            tab.push(listner)
            return() => {
                tab= tab.filter((list) => list !== listner)
            }
        }
    }
  }
  export { createStore };