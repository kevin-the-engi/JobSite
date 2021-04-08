import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

const JobTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 8.5vh;
  width: 95%;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  border-radius: 5px;
  margin: .2vh 0;
  padding: .5vh 1%;
  font-family: Arial, sans-serif;
  color: #424242;
`;

const SpacedRowDiv = styled.div`
  margin: .25vh .25vw;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0 1vw;
  color: ${schema.primary};
  font-size: 1rem;
  font-weight: bold;
`;

const Company = styled.p`
  margin: 0 1vw 0 2vw;
  font-weight: lighter;
  font-style: italic;
`;

const Text = styled.p`
  margin: 0 1vw 0 2vw;
  font-weight: lighter;
`;

const JobResult = ({ job, toggleModal, getJobToDisplay }) => (
  <JobTile onClick={(event) => { event.preventDefault(); getJobToDisplay(job); toggleModal(); }}>
    <SpacedRowDiv>
      <Title>{job.title}</Title>
      <Text>{`$${job.salary.slice(0, job.salary.length - 3)},${job.salary.slice(job.salary.length - 3)}`}</Text>
    </SpacedRowDiv>
    <Company>{`${job.company} (${job.city})`}</Company>
    <Text>{`${job.employmentType.charAt(0).toUpperCase()}${job.employmentType.slice(1)} / ${job.experienceLevel.charAt(0).toUpperCase()}${job.experienceLevel.slice(1)}-level / ${job.workLocationType.charAt(0).toUpperCase()}${job.workLocationType.slice(1)}`}</Text>
  </JobTile>
);

export default JobResult;
