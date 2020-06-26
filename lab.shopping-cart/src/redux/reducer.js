// Reducer zwracający tablicę produktów
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actions";
function reducer(state = [], { type, payload }) {
  if (type === ADD_PRODUCT) {
    return [...state, payload];
  }
  if (type === REMOVE_PRODUCT) {
    const copy = [...state];
    let idx = state.findIndex(
      ({ name, price }) => payload.name === name && payload.price === price
    );
    copy.splice(idx, 1);
    return copy;
  }
  return state;
}
export default reducer;