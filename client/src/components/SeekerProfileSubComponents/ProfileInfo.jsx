import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

const ProfileInfoWrapper = styled.div`
  border: 1px solid #e0e0e0;
  width: 80%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h1`
  margin: .5vh 0 .25vh 0;
  color: ${schema.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Text = styled.p`
  margin: 0;
  font-weight: lighter;
`;

const ItalicText = styled.p`
  margin: 0;
  font-weight: lighter;
  font-style: italic;
`;

const ContactInfo = styled.div`
  width: 95%;
  margin-top: 1vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Link = styled.a`
  margin: 0 .5vw;
  color: inherit;
  font-size: 1rem;
  text-decoration: none;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: ${schema.secondary};
`;

const ProfileInfo = (props) => {
  return(
    <ProfileInfoWrapper>
      <Name>John Smith</Name>
      <ItalicText>Javascript | React | Node</ItalicText>
      <Text>555-867-5309</Text>
      <Link>linkedin.com/in/jacobwpeterson</Link>
      <SectionTitle>Experience</SectionTitle>
      <SectionTitle>Education</SectionTitle>
      <SectionTitle>Certifications</SectionTitle>



    </ProfileInfoWrapper>
  );
};

export default ProfileInfo;
