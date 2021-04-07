import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  width: auto;
  padding: .25vh 1vw;
  text-decoration: none;
  background: #129490;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
`;

class EmployerDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <NavButtonDiv>
          <NavButton href={`${window.location.origin}/#/employer`}>Dashboard</NavButton>
          <NavButton href={`${window.location.origin}/#/employerSearch`}>Search Job Seekers</NavButton>
        </NavButtonDiv>
        <h1>Yo it rendered a dashboard!</h1>
      </div>
    );
  }
}

export default EmployerDashboard;
