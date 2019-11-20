import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css'
import { Homepage, ShopPage, SignInAndSignUp} from './pages'
import { Header } from './components'

function App() {
  return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
  );
}

export default App;
