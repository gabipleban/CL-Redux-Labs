import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
class Home extends Component{
    render() {
        return (
            <div>
                <h1>Witaj na Stronie</h1>
            </div>
        );
    }
}
class Blog extends Component{
    render() {
        return (
            <div>
                <h1>Blog</h1>
            </div>
        );
    }
}
class Pricing extends Component {
    render() {
        return (
            <div>
                <h1>Cennik</h1>
            </div>
        );
    }
}
function App() {
return (
    <HashRouter>
        <div>
            <h1>Aplikacja React Component</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
            </ul>
                 <Route exact path='/' component={Home}/>
                 <Route path='/blog' component={Blog}/>
                 <Route path='/pricing' component={Pricing}/>
        </div>
    </HashRouter>
)
}
export default App;