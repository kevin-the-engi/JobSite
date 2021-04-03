import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import JobPortal from './JobPortal.jsx';

const AppWrapper = styled.div`
  margin: auto;
`;

const App = () => {
  return (
    <AppWrapper>
      <JobPortal />
      {/* <h1>Yo it rendered!</h1> */}
    </AppWrapper>
  )
}

export default App;