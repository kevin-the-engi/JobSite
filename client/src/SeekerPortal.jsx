import React from 'react';
import styled from 'styled-components';

import NavBar from './components/NavBar.jsx';
import Account from './components/Account.jsx';

const SeekerPortalWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

class SeekerPortal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <SeekerPortalWrapper>
        <NavBar />
        <Account />
      </SeekerPortalWrapper>
    );
  };
};

export default SeekerPortal;