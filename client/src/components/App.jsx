import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// import NavBar from './NavBar.jsx';
import SeekerPortal from './SeekerPortal.jsx';

const AppWrapper = styled.div`
  margin: 0 auto;
`;

const App = () => (
  <AppWrapper>
    <SeekerPortal />
  </AppWrapper>
);

export default App;