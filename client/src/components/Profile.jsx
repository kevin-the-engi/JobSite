import React from 'react';
import styled from 'styled-components';

import ProfilePic from './ProfilePic.jsx';
import ProfileInfo from './ProfileInfo.jsx';

const ProfileWrapper = styled.div`
  width: 40%;
  height: 77vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid blue;
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