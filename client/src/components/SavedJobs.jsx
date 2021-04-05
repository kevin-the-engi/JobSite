import React from 'react';
import styled from 'styled-components';

import SavedJobsCard from './SavedJobsCard.jsx';

const SavedJobsWrapper = styled.div`
`;

const SavedJobs = (props) => {
  const savedJobs = [
    { name: 'Software Developer', company: 'Facebook', description: 'description'},
    { name: 'Front-end', company: 'Google', description: 'description'},
    { name: 'Systems Engineer', company: 'Twitter', description: 'description'}
  ];

  return(
    <SavedJobsWrapper>
      {savedJobs.map(job =>
        <SavedJobsCard
          job={job}
        />
      )}
    </SavedJobsWrapper>
  )
};

export default SavedJobs;