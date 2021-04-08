import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

const JobDetailWrapper = styled.div`
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

const JobDetail = styled.div`
  height: 95%;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #e0e0e0;
  border-radius: 10px;
  background: #ffffff;
`;
const Title = styled.h1`
  margin: .5vh 0 .25vh 0;
  color: ${schema.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Company = styled.p`
  margin: 0 1vw;
  font-weight: lighter;
  font-style: italic;
`;

const Description = styled.p`
  margin: 0 1vw;
  font-weight: lighter;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: ${schema.secondary};
`;

const ListingDetailDiv = ({ jobToDisplay }) => (
  <JobDetailWrapper>
    {!jobToDisplay && <div>Select a job listing for more details</div>}
    {jobToDisplay && (
      <JobDetail>
        <Title>{jobToDisplay.title}</Title>
        <Company>{jobToDisplay.company}</Company>
        <SectionTitle>Job Description</SectionTitle>
        <Description>{jobToDisplay.jobDescription}</Description>
        <SectionTitle>Company Description</SectionTitle>
        <Description>{jobToDisplay.companyDescription}</Description>
      </JobDetail>
    )}
  </JobDetailWrapper>
);

export default ListingDetailDiv;
