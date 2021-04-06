import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import FrontPage from './FrontPage.jsx';
import EmployerSearch from './EmployerSearch.jsx';

const App = () => (
  // <Router>
  <BrowserRouter>
    {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
    <Switch>
      {/* <Route path="/about">
          <About />
        </Route> */}
      <Route path="/employer">
        <EmployerSearch />
      </Route>
      <Route path="/">
        <FrontPage />
      </Route>
    </Switch>
  </BrowserRouter>
  // </Router>
);

export default App;
