import React from 'react';
import styled from 'styled-components';

import Account from './SeekerProfileSubComponents/Account.jsx';

const SeekerPortalWrapper = styled.div`
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
  width: auto;
  padding: .25vh 1vw;
  text-decoration: none;
  background: #129490;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
`;

class SeekerPortal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reminders: [],
      savedJobs: [],
      appliedJobs: [],
      notes: [],
    };
  }

  render() {
    return (
      <SeekerPortalWrapper>
        <NavButtonDiv>
          <NavButton href={`${window.location.origin}/#/seeker`}>My Profile</NavButton>
          <NavButton href={`${window.location.origin}/#/jobs`}>Find Jobs</NavButton>
        </NavButtonDiv>
        <Account />
      </SeekerPortalWrapper>
    );
  }
}

export default SeekerPortal;
