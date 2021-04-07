import React from 'react';
import styled from 'styled-components';

const JobDetailWrapper = styled.div`
  z-index: 2;
  position: fixed;
  width: 95%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid orange;
  background-color: whitesmoke;

  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
  font-family: Arial, sans-serif;
  color: #424242;
`;

const JobDetail = styled.div`
  height: 95%;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #e0e0e0;
  border-radius: 10px;
  background: #ffffff;
`;

const ListingDetailDiv = ({ jobToDisplay }) => (
  <JobDetailWrapper>
    {!jobToDisplay && <div>Select a job listing for more details</div>}
    {jobToDisplay && (
      <JobDetail>
        {`${jobToDisplay}
        fill this in with all the job description fields,see ApplicantDetailDiv in EmployerSearchSubComponents for base styling options.
        Everyting here will need to be duplicated in the modal file.`}
      </JobDetail>
    )}
  </JobDetailWrapper>
);

export default ListingDetailDiv;
