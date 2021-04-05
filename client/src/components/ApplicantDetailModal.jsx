import React from 'react';
import styled from 'styled-components';

const ApplicantDetailWrapper = styled.div`
  z-index: 2;
  position: fixed;
  width: 95%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid orange;
  background-color: whitesmoke;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
  font-family: Arial, sans-serif;
  color: #424242;
`;

const ApplicantResume = styled.div`
  height: 95%;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #e0e0e0;
  border-radius: 10px;
  background: #fff;
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

const TileBody = styled.p`
  margin: 0;
  font-weight: lighter;
`;

const ApplicantDetailModal = ({ resumeToDisplay }) => (
  <ApplicantDetailWrapper onMouseDown={(event) => event.stopPropagation()}>
    <ApplicantResume>
      <Name>{`${resumeToDisplay.firstName} ${resumeToDisplay.lastName}`}</Name>
      <Summary>Javascript | React | Node</Summary>
      <Email>{resumeToDisplay.email}</Email>
      <Degree>{`Degree: ${resumeToDisplay.education[resumeToDisplay.education.length - 1].degreeType}, ${resumeToDisplay.education[resumeToDisplay.education.length - 1].fieldOfStudy}`}</Degree>
      <Work>{`Last Job: ${resumeToDisplay.workExperience[resumeToDisplay.workExperience.length - 1].title} @ ${resumeToDisplay.workExperience[resumeToDisplay.workExperience.length - 1].employer}`}</Work>
    </ApplicantResume>
  </ApplicantDetailWrapper>
);

export default ApplicantDetailModal;
