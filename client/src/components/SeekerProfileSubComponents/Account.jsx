import React from 'react';
import styled from 'styled-components';

import Profile from './Profile.jsx';
import Tabs from './Tabs.jsx';

const AccountWrapper = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    height: 80vh;
    flex-direction: row;
  }
`;

const Account = (props) => {
  const { reminders } = props;

  return (
    <AccountWrapper>
      <Profile />
      <Tabs reminders={reminders} />
    </AccountWrapper>
  );
};

export default Account;
