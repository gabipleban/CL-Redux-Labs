import React, { Component } from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

class Main extends Component{
    render() {
        return(
            <div>
                <h1>Witaj na Stronie</h1>
            </div>
        )
    }
}
class AboutUs extends Component{
    render() {
        return(
            <div>
                <p>Troche wiecej o nas</p>
            </div>
        )
    }
}
class AboutCompany extends Component{
    render() {
        return(
            <div>
                <p>Troche wiecej na temat firmy</p>
            </div>
        )
    }
}
function App() {
    return(
        <HashRouter>
        <div>
            <h1>Aplikacja React z React Router</h1>
            <Route exact path='/' component={Main} />
            <Switch>
                <div>
                    <h2>O nas</h2>
                    <Route exact path='/about/us' component={AboutUs} />
                    <Route exact path='/about/company' component={AboutCompany} />
                </div>
            </Switch>
        </div>
</HashRouter>
    )
}
export default App;