// Tutaj zaimplementuj dwie akcje oraz action-creators
// Na koniec odkomentuj ostatnią linię aby wyeksportować odpowienie zmienne.
const INCREMENT = "INCREMENT"
const DECREMENT ='DECREMENT'
function increment(value){
    return {
        type: INCREMENT,
        payload: value
    }
}
// ES6
const decrement= (value)=> (
    {
        type: DECREMENT,
        payload: value
    }
)
export { INCREMENT, DECREMENT, increment, decrement }

