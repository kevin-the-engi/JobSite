import React from 'react';

import styled from 'styled-components';

const NavBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 101%;
  max-width: 101%;
  height: 6vh;
  background: #fff;
  margin: -10px 0 1vh 0;
  padding: 0 1vw 0 5vw;
  border-bottom: 1px solid #e0e0e0;
  color: #000;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    margin: -10px 0 3vh 0;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Slogan = styled.p`
  font-size: 1rem;
  margin: 0 0 7px 1vw;
  font-style: italic;
`;

const NavBar = (props) => (
  <NavBarWrapper>
    <Logo>JobSite</Logo>
    <Slogan>Connecting people with jobs and jobs with people</Slogan>
  </NavBarWrapper>
);

export default NavBar;
