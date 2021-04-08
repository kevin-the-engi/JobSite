import React from 'react';
import styled from 'styled-components';

import FindJobSeekersPortal from './EmployerSearchSubComponents/FindJobSeekersPortal.jsx';
import schema from './constants.jsx';

const EmployerSearchWrapper = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  background: #F5F5F5;
  align-items: center;
  height: 94vh;
  max-width: 100vw;
`;

const NavButtonDiv = styled.div`
  height: 6vh;
  width: auto;
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
  margin: 0 1vw;
  line-height: 4vh;
  letter-spacing: 1px;
  width: auto;
  padding: .25vh 1.5vw;
  text-decoration: none;
  background: ${schema.secondary};
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
`;

const EmployerSearch = () => (
  <EmployerSearchWrapper>
    <NavButtonDiv>
      <NavButton href={`${window.location.origin}/#/employer`}>DASHBOARD</NavButton>
      <NavButton href={`${window.location.origin}/#/employerSearch`}>HIRE</NavButton>
    </NavButtonDiv>
    <FindJobSeekersPortal />
  </EmployerSearchWrapper>
);

export default EmployerSearch;
