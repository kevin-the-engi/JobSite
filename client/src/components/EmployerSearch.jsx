import React from 'react';
import styled from 'styled-components';

import FindJobSeekersPortal from './EmployerSearchSubComponents/FindJobSeekersPortal.jsx';

const EmployerSearchWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  // height: 100vh;
`;

const NavButtonDiv = styled.div`
  height: 6vh;
  width: 20vw;
  position: absolute;
  top: 0;
  right: 5vw;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavButton = styled.a`
  position: relative;
  text-align: center;
  height: 4vh;
  line-height: 4vh;
  width: 9vw;
  border: 1px solid grey;
  border-radius: 25px;
  text-decoration: none;
  color: #424242;
  background: rgba(255,255,255,0.4);
`;

const EmployerSearch = () => (
  <EmployerSearchWrapper>
    <NavButtonDiv>
      <NavButton href={`${window.location.origin}/#/employer`}>Employer Dashboard</NavButton>
      <NavButton href={`${window.location.origin}/#/employerSearch`}>Search Job Seekers</NavButton>
    </NavButtonDiv>
    <FindJobSeekersPortal />
  </EmployerSearchWrapper>
);

export default EmployerSearch;
