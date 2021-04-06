import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavButtonDiv = styled.div`
  height: 6vh;
  width: 20vw;
  position: absolute;
  top: 0;
  right: 0;
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
          <NavButton href={`${window.location.origin}/#/employer`}>Employer Dashboard</NavButton>
          <NavButton href={`${window.location.origin}/#/employerSearch`}>Search Job Seekers</NavButton>
        </NavButtonDiv>
        <h1>Yo it rendered a dashboard!</h1>
      </div>
    );
  }
}

export default EmployerDashboard;
