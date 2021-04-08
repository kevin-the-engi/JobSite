import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  HashRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import NavBar from './NavBar.jsx';
import FrontPage from './FrontPage.jsx';
import SeekerPortal from './SeekerPortal.jsx';
import JobPortal from './JobPortal.jsx';
import EmployerDashboard from './EmployerDashboard.jsx';
import EmployerSearch from './EmployerSearch.jsx';

const App = () => {
  const [userID, setUserID] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [accountType, setAccountType] = useState('');

  return (
    <HashRouter>
      <NavBar />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/seeker">
          <SeekerPortal />
        </Route>
        <Route path="/jobs">
          <JobPortal />
        </Route>
        <Route path="/employer">
          <EmployerDashboard email={email} />
        </Route>
        <Route path="/employerSearch">
          <EmployerSearch />
        </Route>
        <Route path="/">
          <FrontPage
            setUserID={(id) => setUserID(id)}
            setAccountType={(type) => setAccountType(type)}
            bubbleUpEmail={(val) => setEmail(val)}
            bubbleUpCompany={(val) => setCompany(val)}
          />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
