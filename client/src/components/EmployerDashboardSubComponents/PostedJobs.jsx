import React from 'react';
import styled from 'styled-components';

import JobPosting from './JobPosting.jsx';

const PostedJobsWrapper = styled.div`
  height: 72%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  min-height: 5%;
  text-align: center;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 2.5rem;
`;

const ListWrapper = styled.div`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const PostedJobs = (props) => (
  <PostedJobsWrapper>
    <Header>Current Jobs Listed: 2</Header>
    <ListWrapper>
      <List>

        {/* Delete the following once routed */}

        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((job) => (
          <JobPosting
            job={job}
            key={job}
          />
        ))}

        {/* Use the following once routed

        {jobPosting.map((job) => (
          <JobPosting
            job={job}
            key={job._id}
          />
        ))} */}
      </List>
    </ListWrapper>
  </PostedJobsWrapper>
);

export default PostedJobs;
