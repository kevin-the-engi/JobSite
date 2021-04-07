import React from 'react';
import styled from 'styled-components';

const JobTile = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 9.5vh;
  width: 95%;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  border-radius: 5px;
  margin: .2vh 0;
  padding: .5vh 1%;
  font-family: Arial, sans-serif;
  color: #424242;
`;

const JobResult = ({ job, toggleModal, getJobToDisplay }) => (
  <JobTile onClick={(event) => { event.preventDefault(); getJobToDisplay(job); toggleModal(); }}>
    {job}
  </JobTile>
);

export default JobResult;
