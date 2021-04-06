import React from 'react';
import styled from 'styled-components';

const SavedJobsCardWrapper = styled.div`
  width: 95%;
  height: 10vh;
  border: 2px solid yellow;
  border-radius: 10px;
`;

const SavedJobsCard = (props) => {
  const { job: { name, company, description } } = props;
  return(
    <SavedJobsCardWrapper>
      {name} {company} {description}
    </SavedJobsCardWrapper>
  )
};

export default SavedJobsCard;