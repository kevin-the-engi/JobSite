import React from 'react';
import styled from 'styled-components';

const JobTile = styled.div`
  height: 10vh;
  width: 98%;
  border: solid 2px purple;
  border-radius: 10px;
`;

const JobResult = (props) => <JobTile>here there be a job tile</JobTile>;

export default JobResult;
