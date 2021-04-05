import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 9.5vh;
  width: 95%;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  border-radius: 10px;
  padding: .5vh 1%;
  font-family: Arial, sans-serif;
  color: #424242;
`;

const Name = styled.h1`
  margin: .5vh 0 .25vh 0;
  font-size: 1rem;
  font-weight: bold;
`;

const Summary = styled.p`
  margin: 0;
  font-weight: lighter;
  font-style: italic;
`;

const Email = styled.p`
  margin: 0;
  font-weight: lighter;
`;

const Degree = styled.p`
  margin: 0;
  font-weight: lighter;
`;

const Work = styled.p`
  margin: 0;
  font-weight: lighter;
`;

const SeekerTile = ({ seeker, toggleModal, getResumeToDisplay }) => (
  <Tile onClick={() => { getResumeToDisplay(seeker); toggleModal(); }}>
    <Name>{`${seeker.firstName} ${seeker.lastName}`}</Name>
    <Summary>Javascript | React | Node</Summary>
    <Email>{seeker.email}</Email>
    <Degree>{`Degree: ${seeker.education[seeker.education.length - 1].degreeType} in ${seeker.education[seeker.education.length - 1].fieldOfStudy}`}</Degree>
    <Work>{`Last Job: ${seeker.workExperience[seeker.workExperience.length - 1].title} @ ${seeker.workExperience[seeker.workExperience.length - 1].employer}`}</Work>
  </Tile>
);

export default SeekerTile;
