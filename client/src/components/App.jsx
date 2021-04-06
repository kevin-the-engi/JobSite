import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NavBar from './NavBar.jsx';
import JobPortal from './JobPortal.jsx';

const AppWrapper = styled.div`
  margin: 0 auto;
`;

const App = () => (
  <AppWrapper>
    <NavBar />
    <JobPortal />
  </AppWrapper>
);

export default App;
