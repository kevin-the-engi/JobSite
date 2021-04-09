import React from 'react';
import styled from 'styled-components';
import { get } from '../../../http';

import DummyData from '../../../../DummyData.js';
import schema from '../constants.jsx';
import SearchBar from './Searchbar.jsx';
import Filters from './Filters.jsx';
import ListSeekerResults from './ListSeekerResults.jsx';
import ApplicantDetailDiv from './ApplicantDetailDiv.jsx';
import ApplicantDetailModal from './ApplicantDetailModal.jsx';

const PageWrapper = styled.div`
  margin: 0 auto;
  width: 95vw;
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
    height: 8vh;
  }
`;

const SeekerResultsPortalWrapper = styled.div`
  width: 100%;
  height: 77vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #transparent;

  @media (min-width: 768px) {
    height: 80vh;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  ${schema.modalBackdrop}
`;

class FindJobSeekersPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      filters: {

      },
      isDesktop: false,
      modalOpen: false,
      jobSeekers: null,
      resumeToDisplay: null,
    };
    this.updateScreenSize = this.updateScreenSize.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getResumeToDisplay = this.getResumeToDisplay.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  componentDidMount() {
    // send GET Request for data and assign to jobSeekers in state
    // app.get('/api/resume/all', getAllResumes);
    // axios.get('http://localhost:3001/api/resume/all')
    // axios.get('http://3.134.101.103/api/resume/all')
    get('api/resume/all')
      .then((data) => this.setState({ jobSeekers: data }))
      .catch();
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  }

  getResumeToDisplay(seeker) {
    this.setState({ resumeToDisplay: seeker });
  }

  setSearch(term) {

  }

  setLocation(term) {

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
      jobSeekers, isDesktop, modalOpen, resumeToDisplay,
    } = this.state;

    return (
      <PageWrapper>
        <SearchWrapper>
          <SearchBar />
          <Filters />
        </SearchWrapper>
        {jobSeekers && (
          <SeekerResultsPortalWrapper>
            <ListSeekerResults
              toggleModal={this.toggleModal}
              jobSeekers={jobSeekers}
              getResumeToDisplay={this.getResumeToDisplay}
            />
            { isDesktop && <ApplicantDetailDiv resumeToDisplay={resumeToDisplay} />}
            { !isDesktop && modalOpen && (
              <ModalBackground onMouseDown={this.toggleModal}>
                <ApplicantDetailModal resumeToDisplay={resumeToDisplay} />
              </ModalBackground>
            )}
          </SeekerResultsPortalWrapper>
        )}
      </PageWrapper>
    );
  }
}

export default FindJobSeekersPortal;
