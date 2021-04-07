import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  border-radius: 50%;
  padding: 2px;
  border: 3px solid #5fa317;
`;

const ProfilePic = (props) => {
  return(
    <div>
      <Image src="test.jpeg" alt="profilePic" width="150px" height="150px"></Image>
    </div>
  );
};

export default ProfilePic;