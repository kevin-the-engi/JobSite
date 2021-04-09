/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {post} from '../../../http';
import SavedJobsCard from './SavedJobsCard.jsx';
import DropDown from './DropDown.jsx';

const SavedJobsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const savedJobs = [
//   {
//     name: 'Software Developer', company: 'Facebook', description: 'description', interestLevel: '3',
//   },
//   {
//     name: 'Front-end', company: 'Google', description: 'description', interestLevel: '1',
//   },
//   {
//     name: 'Systems Engineer', company: 'Twitter', description: 'description', interestLevel: '1',
//   },
//   {
//     name: 'Burger-tasting Expert', company: 'McDonalds', description: 'description', interestLevel: '2',
//   },
// ];

const interests = {
  exInterested: '3',
  veryInterested: '2',
  interested: '1',
  showAll: '0',
};

const SavedJobs = (props) => {
  // const { savedJobs } = props;
  const [jobData, setJobData] = useState([]);
  const [interestLevel, setInterestLevel] = useState('0');

  useEffect(() => {
    const jobIdArray = [];
    if (props.savedJobs.length !== 0) {
      props.savedJobs.forEach((job) => {
        jobIdArray.push(job.jobListingId);
      });
    }
    const searchBody = { data: jobIdArray };
    post('api/listing/savedlistings', searchBody)
      .then((result) => {
        setJobData(result);
      })
      .catch((err) => console.log(err));
  }, [props.savedJobs]);

  const selectInterest = (interest) => {
    setInterestLevel(interest);
  };

  return (
    <SavedJobsWrapper>
      <DropDown selectInterest={selectInterest} />
      {interestLevel === '0'
        ? props.savedJobs.map((job) => (<SavedJobsCard job={job} />))
        : props.savedJobs
          .filter((job) => job.interestLevel === interestLevel)
          .map((job) => (<SavedJobsCard job={job} />))}
    </SavedJobsWrapper>
  );
};

export default SavedJobs;
