import React from 'react';
import styled from 'styled-components';

import SavedJobsCard from './SavedJobsCard.jsx';
// import SavedDropdown from './SavedDropdown.jsx';
import DropDown from './DropDown.jsx';

const SavedJobsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SavedJobs = (props) => {
  const savedJobs = [
    { name: 'Software Developer', company: 'Facebook', description: 'description' },
    { name: 'Front-end', company: 'Google', description: 'description' },
    { name: 'Systems Engineer', company: 'Twitter', description: 'description' },
    { name: 'Burger-tasting Expert', company: 'McDonalds', description: 'description' },
  ];

  return (
    <SavedJobsWrapper>
      <DropDown />
      {savedJobs.map((job) => (
        <SavedJobsCard
          job={job}
        />
      ))}
    </SavedJobsWrapper>
  );
};

export default SavedJobs;
