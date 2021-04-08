import React from 'react';
import styled from 'styled-components';

import AppliedJobsCard from './AppliedJobsCard.jsx';

const AppliedJobsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppliedJobs = () => {
  const savedJobs = [
    { name: 'Ice-cream Taster', company: 'Ben & Jerry\'s', description: 'description' },
    { name: 'Bear Poker', company: 'Volunteer', description: 'description' },
  ];

  return (
    <AppliedJobsWrapper>
      { savedJobs.map((job) => <AppliedJobsCard job={job} />) }
    </AppliedJobsWrapper>
  );
};

export default AppliedJobs;
