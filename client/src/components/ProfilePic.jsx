import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 50px;
`;

const ProfilePic = (props) => {
  return(
    <div>
      <Image src="test.jpeg" alt="profilePic" width="100px" height="100px"></Image>
    </div>
  );
};

export default ProfilePic;