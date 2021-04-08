import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get } from '../../http';

import PostJob from './EmployerDashboardSubComponents/PostJob.jsx';
import Profile from './EmployerDashboardSubComponents/Profile.jsx';
// import JobApplicants from './EmployerDashboardSubComponents/JobApplicants.jsx';

import Notes from './EmployerDashboardSubComponents/Notes.jsx';

import ApplicantDetailDiv from './EmployerSearchSubComponents/ApplicantDetailDiv.jsx';
import ApplicantDetailModal from './EmployerSearchSubComponents/ApplicantDetailModal.jsx';

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 94vh;
  }
`;

const NavButtonDiv = styled.div`
  height: 6vh;
  width: auto;
  position: absolute;
  top: 0;
  right: 5vw;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavButton = styled.a`
  position: relative;
  text-align: center;
  height: 4vh;
  margin: 0 1vw;
  line-height: 4vh;
  letter-spacing: 1px;
  width: auto;
  padding: .25vh 1.5vw;
  text-decoration: none;
  background: #129490;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
`;

const LowerDashboardWrapper = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    height: 80vh;
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  width: 95%;
  height: 97%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #FFF;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);

  @media (min-width: 768px) {
    width: 40vw;
  }
`;

const RightSide = styled.div`
  width: 95%;
  height: 97%;
  margin: 3vh 0 0 0;
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

  @media (min-width: 768px) {
    width: 52vw;
    margin: 0;
  }
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

class EmployerDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      resumeToDisplay: null,
      modalOpen: false,
      jobApplicants: null,
      notes: [],
    };
    this.updateScreenSize = this.updateScreenSize.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getResumeToDisplay = this.getResumeToDisplay.bind(this);
  }

  componentDidMount() {
    // NEED employerNoteId
    get('api/employerdata/note/all', { employerNoteId: '606d288db9fe4c4ece49270c' })

    // get('api/employerdata/note/all', { employerNoteId })
      .then((data) => this.setState({ notes: data.notes }), () => console.log(this.state.notes))
      .catch((err) => console.log(err));
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  }

  getResumeToDisplay(seeker) {
    this.setState({ resumeToDisplay: seeker });
  }

  toggleModal() {
    this.setState((prevState) => ({
      modalOpen: !prevState.modalOpen,
    }));
  }

  updateScreenSize() {
    this.setState({ isDesktop: window.innerWidth >= 768 });
  }

  render() {
    const {
      jobApplicants, resumeToDisplay, toggleModal, isDesktop, modalOpen,
    } = this.state;
    return (
      <PageWrapper>
        <NavButtonDiv>
          <NavButton href={`${window.location.origin}/#/employer`}>DASHBOARD</NavButton>
          <NavButton href={`${window.location.origin}/#/employerSearch`}>HIRE</NavButton>
        </NavButtonDiv>
        <PostJob />
        <LowerDashboardWrapper>
          <LeftSide>
            <Profile />
            <Notes />
            {/* <JobApplicants
              jobApplicants={jobApplicants}
              toggleModal={this.toggleModal}
              getResumeToDisplay={this.getResumeToDisplay}
            /> */}
          </LeftSide>
          <RightSide>
            { isDesktop && <ApplicantDetailDiv resumeToDisplay={resumeToDisplay} />}
            { !isDesktop && modalOpen && (
              <ModalBackground onMouseDown={toggleModal}>
                <ApplicantDetailModal resumeToDisplay={resumeToDisplay} />
              </ModalBackground>
            )}
          </RightSide>
        </LowerDashboardWrapper>
      </PageWrapper>
    );
  }
}

export default EmployerDashboard;
