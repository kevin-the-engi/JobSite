import React from 'react';
import styled from 'styled-components';

const ProfileInfoWrapper = styled.div`
  border: 1px solid orange;
  width: 50%;
  height: 50vh;
`;

const ProfileInfo = (props) => {
  return(
    <ProfileInfoWrapper>
      Name<br />
      Job<br />
      Account
    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;