// Tu dodaj odpowiednie importy (createStore, akcje, reducer)

import {createStore} from "redux";
import counterReducer from './redux/reducers/counter';
import {increment, decrement} from './redux/actions/counterActions'



export default function () {
  // Tutaj zaimplementuj aplikację counter wg. opisu zadania
  // W konsoli powinno pojawić się odpowiednio:
  //
  // from subscribe 5
  // from subscribe 3
  // 1

    let store = createStore(counterReducer,0)

    const unsubscribe = store.subscribe(()=> {
        console.log('from subscribe', store.getState())
    })

    store.dispatch(increment(5))
    store.dispatch(decrement(2))

    unsubscribe()
    store.dispatch(increment(200))
    console.log(store.getState())
}