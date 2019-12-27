import React from 'react';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage'
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
