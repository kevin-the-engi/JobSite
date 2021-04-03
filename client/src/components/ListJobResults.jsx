import React from 'react';
import styled from 'styled-components';

import JobResult from './JobResult.jsx';

const ListWrapper = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center
  justify-content: space-around;
  border: 2px solid red;
`;

const ListJobResults = ({jobResults}) => {
  return(
    <ListWrapper>
      <JobResult />
    </ListWrapper>
  )
}

export default ListJobResults;