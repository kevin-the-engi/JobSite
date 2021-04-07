import React from 'react';
import styled from 'styled-components';

import ProfilePic from './ProfilePic.jsx';
import ProfileInfo from './ProfileInfo.jsx';

const ProfileWrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #FFF;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);

  @media (min-width: 768px) {
    width: 32vw;
  }
`;

const Profile = (props) => {
  return(
    <ProfileWrapper>
      <ProfilePic />
      <ProfileInfo />
    </ProfileWrapper>
  )
};

export default Profile;