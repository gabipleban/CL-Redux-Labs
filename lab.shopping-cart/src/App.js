import React from 'react';
import {
    NavLink as Link,
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from "./redux/store";
import Cart from './containers/Cart'


const Main = () =>{
    return(
        <div>
            <Provider store={store}>
                <HashRouter>
                    <nav>
                        <ul>
                            <li><Link to='/'>Wszystkie</Link></li>
                            <li><Link to='/10'>do 10zl</Link></li>
                            <li><Link to='/50'>do 50 zl</Link></li>
                            <li><Link to='/100'>do 100zl</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/:price?' component={Cart}/>
                    </Switch>
                </HashRouter>
         </Provider>
        </div>
    )
}
export default Main;