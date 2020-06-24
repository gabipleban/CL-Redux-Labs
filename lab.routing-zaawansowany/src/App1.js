import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import Main from './Components/Main'
import HelloYou from './Components/HelloYou'
import CheckAge from './Components/CheckAge'
import Navigation from './Components/Navigation'

const App = () => (
  <div>
    <HashRouter>
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Main}  />
        <Route  path='/hello/:name?' component={HelloYou}  />
        <Route  path='/checkage/:age' component={CheckAge}  />
      </Switch>
    </HashRouter>
  </div>
);

export default App;


