import React from 'react';
import styled from 'styled-components';

const ApplicantDetailWrapper = styled.div`
  width: 62%;
  height: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: whitesmoke;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
  font-family: Arial, sans-serif;
  color: #424242;
`;

const ApplicantResume = styled.div`
  height: 95%;
  width: 98%;
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

const TileBody = styled.p`
  margin: 0;
  font-weight: lighter;
`;

const ApplicantDetailDiv = (props) => (
  <ApplicantDetailWrapper>
    <ApplicantResume>
      <Name>Bobby Grundle</Name>
      <Summary>Javascript | React | Node</Summary>
      <TileBody>Degree: Bachelors, Computer Science</TileBody>
      <TileBody>Last Position: Software Engineer @ Google</TileBody>
      <TileBody>
        Architected a dependency-light service using React and CSS styled-components to deliver a seamless UI/UX
        Used conditional rendering for all image navigation components to keep interface clean and intuitive
        Streamlined web server by using an in-memory cache and implemented a lazy-render of below-the-fold components to improve Time to Interactive and First Contentful Paint times to under 0.5 seconds
        Led team of 3 developers using Git Feature Branch Workflow and Agile methodology, ensuring application complied fully with accessibility standards, best practices, and SEO.
      </TileBody>
    </ApplicantResume>
  </ApplicantDetailWrapper>
);

export default ApplicantDetailDiv;
