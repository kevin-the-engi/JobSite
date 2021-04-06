import React from 'react';
import styled from 'styled-components';

const AppliedJobsCardWrapper = styled.div`
  width: 95%;
  height: 10vh;
  border: 2px solid yellow;
  border-radius: 10px;
`;

const AppliedJobsCard = (props) => {
  const { job: { name, company, description } } = props;
  return(
    <AppliedJobsCardWrapper>
      {name} {company} {description}
    </AppliedJobsCardWrapper>
  );
};

export default AppliedJobsCard;