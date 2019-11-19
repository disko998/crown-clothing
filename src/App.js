import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'
import { Homepage, ShopPage } from './pages'

function App() {
  return (
      <div>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </div>
  );
}

export default App;
