import React from 'react';
import styled from 'styled-components';

import JobResult from './JobResult.jsx';

const ResultsWrapper = styled.div`
  width: 35%;
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 5%;
`;

const ListWrapper = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  ::-ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid green;
`;

const ListJobResults = ({ jobResults }) => (
  <ResultsWrapper>
    <Header>Jobs Found: 35</Header>
    <ListWrapper>
      <List>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(() => <JobResult />)}
      </List>
    </ListWrapper>
  </ResultsWrapper>
);

export default ListJobResults;
