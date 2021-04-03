import React from 'react';
import styled from 'styled-components';

import NavBar from './components/NavBar.jsx';
import FindJobSeekersPortal from './components/FindJobSeekersPortal.jsx';

const EmployerSearchWrapper = styled.div`
  margin: 0 auto;
`;

const EmployerSearch = () => (
  <EmployerSearchWrapper>
    <NavBar />
    <FindJobSeekersPortal />
  </EmployerSearchWrapper>
);

export default EmployerSearch;
