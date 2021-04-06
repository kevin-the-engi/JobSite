import React from 'react';
import styled from 'styled-components';

import Profile from './Profile.jsx';
import Tabs from './Tabs.jsx';

const AccountWrapper = styled.div`
  margin: 0 auto;
  width: 95vw;
  height: 88vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(135deg, #BAFA75, #129490);
  // background: #129490;
  // background: linear-gradient(135deg, #5fa317, #129490);

  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
`;

const Account = (props) => {
  return(
    <AccountWrapper>
      <Profile />
      <Tabs />
    </AccountWrapper>
  );
};

export default Account;