import React, { useState } from 'react';
import styled from 'styled-components';

import SaveJobModal from './SaveJobModal.jsx';
import schema from '../constants.jsx';

const JobDetailWrapper = styled.div`
  width: 62%;
  height: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #FFF;
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

const Wrapper = styled.div`
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: #42424275;
`;

const Button = styled.button`
  padding: 0 1.25vw;
  background: white;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
`;

// const ListingDetailDiv = ({ jobToDisplay }) => {
//   const [show, setShow] = useState(false);

//   const toggleModal = (event) => {
//     event.preventDefault();
//     setShow(!show);
//     // send new note back up
//   };

//   return (
//     <JobDetailWrapper>
//       {!jobToDisplay && <div>Select a job listing for more details</div>}
//       {jobToDisplay && (
//         <JobDetail>
//           {`${jobToDisplay}
//           fill this in with all the job description fields,see ApplicantDetailDiv in EmployerSearchSubComponents for base styling options.
//           Everyting here will need to be duplicated in the modal file.`}
//           {show
//           ? (
//             <ModalBackground onMouseDown={toggleModal}>
//               <SaveJobModal toggleModal={toggleModal} display={setShowAdd} />
//             </ModalBackground>
//           ) : null}
//         </JobDetail>
//       )}
//     </JobDetailWrapper>
//   )
// };
const Title = styled.h1`
  margin: .5vh 0 .25vh 0;
  color: ${schema.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Company = styled.p`
  margin: 0 1vw;
  font-weight: lighter;
  font-style: italic;
`;

const Description = styled.p`
  margin: 0 1vw;
  font-weight: lighter;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: ${schema.secondary};
`;

const ListingDetailDiv = ({ jobToDisplay }) => {
  const [show, setShow] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setShow(!show);
    // send new note back up
  };

  return (
    <JobDetailWrapper>
      {!jobToDisplay && <div>Select a job listing for more details</div>}
      {jobToDisplay && (
        <JobDetail>
          <Title>{jobToDisplay.title}</Title>
          <Company>{jobToDisplay.company}</Company>
          <SectionTitle>Job Description</SectionTitle>
          <Description>{jobToDisplay.jobDescription}</Description>
          <SectionTitle>Company Description</SectionTitle>
          <Description>{jobToDisplay.companyDescription}</Description>

          <Wrapper>
            <Button onClick={toggleModal}>Save</Button>
            {show
              ? (
                <ModalBackground onMouseDown={toggleModal}>
                  <SaveJobModal toggleModal={toggleModal} />
                </ModalBackground>
              ) : null}
          </Wrapper>
        </JobDetail>
      )}

    </JobDetailWrapper>
  );
};

export default ListingDetailDiv;

// benefits: ["401k"]
// city: "San Francisco"
// companyDescription: "Bibendum est ultricies integer quis auctor elit sed vulputate. Blandit cursus risus at ultrices mi."
// datePosted: "2021-02-28T00:00:00.000Z"
// employerId: "606d2d766faf2c4f0b45fa0a"
// employmentType: "fulltime"
// experienceLevel: "mid"
// industry: "Online Education"
// requirements: (2) ["2-4 years of qa training", "navigating reddit"]
// salary: "100000"
// workLocationType: "onsite"
// zipcode: "91403"
