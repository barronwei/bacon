import React from 'react';
import HomePage from './containers/home';
import SchedulePage from './containers/schedule'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:id" component={SchedulePage} />
    </Switch>
  </BrowserRouter>

)

export default App;
