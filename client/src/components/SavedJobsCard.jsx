import React from 'react';
import styled from 'styled-components';

const SavedJobsCardWrapper = styled.div`

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