import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import FrontPage from './FrontPage.jsx';

const App = () => (
  // <div>
  //   <h1>Yo it rendered!</h1>
  // </div>

  // return (
  <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
         </Route> */}
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </div>
  </Router>
  // );
);

export default App;
