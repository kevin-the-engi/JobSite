import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

const ApplicantTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 8.5vh;
  width: 95%;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  border-radius: 5px;
  margin: .2vh 0;
  padding: .5vh 1%;
  font-family: Arial, sans-serif;
  color: #424242;
`;

const SpacedRowDiv = styled.div`
  margin: .25vh .25vw;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0 1vw;
  color: ${schema.primary};
  font-size: 1rem;
  font-weight: bold;
`;

const Company = styled.p`
  margin: 0 1vw 0 2vw;
  font-weight: lighter;
  font-style: italic;
`;

const Text = styled.p`
  margin: 0 1vw 0 2vw;
  font-weight: lighter;
`;

const Applicant = ({ applicant, toggleModal, getResumeToDisplay }) => (
  <ApplicantTile onClick={(event) => { event.preventDefault(); toggleModal(); getResumeToDisplay(applicant) }}>
    {/* Delete the following once routed */}
    <Text>{applicant}</Text>

    {/* Use the following once routed

    <Title>{`${applicant.firstName} ${applicant.lastName}`}</Title>
   */}
  </ApplicantTile>
);

export default Applicant;
