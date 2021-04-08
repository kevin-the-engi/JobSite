import React from 'react';
import styled from 'styled-components';
import { get } from '../../http';

import SearchBar from './SeekerSearchSubComponents/Searchbar.jsx';
import Location from './SeekerSearchSubComponents/Location.jsx';
import Filters from './SeekerSearchSubComponents/Filters.jsx';
import ListJobResults from './SeekerSearchSubComponents/ListJobResults.jsx';
import ListingDetailDiv from './SeekerSearchSubComponents/ListingDetailDiv.jsx';
import ListingDetailModal from './SeekerSearchSubComponents/ListingDetailModal.jsx';

const PageWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const SearchWrapper = styled.div`
  width: 100%;
  height: 16vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    height: 8vh;
  }
`;

const JobResultsPortalWrapper = styled.div`
  width: 95%;
  height: 77vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

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
  background-color: #42424275;
`;

class JobPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      search: '',
      location: '',
      filters: {},
      jobResults: [],
      jobToDisplay: null,
    };
    this.updateScreenSize = this.updateScreenSize.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getJobToDisplay = this.getJobToDisplay.bind(this);
    this.getJobListings = this.getJobListings.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setFilters = this.setFilters.bind(this);
  }

  componentDidMount() {
    // send GET Request for data and assign to jobResults
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize);
    this.getJobListings();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  }

  getJobListings() {
    const { filters:
      { employment, experience, locationType, salary, datePosted, locationRange }
    } = this.state;

    const params = ``;

    get('api/listing/all')
    .then((data) => this.setState({ jobResults: data }))
    .catch((e) => console.log(e));
  }

  getJobToDisplay(job) {
    this.setState({ jobToDisplay: job });
  }

  setSearch(term) {
    this.setState = {
      search: term,
    };
  }

  setLocation(term) {
    this.setState = {
      location: term,
    };
  }

  setFilters(filters) {
    this.setState = {
      filters,
    };
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
      isDesktop, modalOpen, jobResults, jobToDisplay,
    } = this.state;

    return (
      <PageWrapper>
        <NavButtonDiv>
          <NavButton href={`${window.location.origin}/#/seeker`}>MY PROFILE</NavButton>
          <NavButton href={`${window.location.origin}/#/jobs`}>FIND JOBS</NavButton>
        </NavButtonDiv>
        <SearchWrapper>
          <SearchBar setSearch={this.setSearch} />
          <Location setLocation={this.setLocation} />
          <Filters setFilters={this.setFilters} />
        </SearchWrapper>
        <JobResultsPortalWrapper>
          <ListJobResults
            jobResults={jobResults}
            toggleModal={this.toggleModal}
            getJobToDisplay={this.getJobToDisplay}
          />
          { isDesktop && <ListingDetailDiv jobToDisplay={jobToDisplay} /> }
          { !isDesktop && modalOpen && (
            <ModalBackground onMouseDown={this.toggleModal}>
              <ListingDetailModal jobToDisplay={jobToDisplay} />
            </ModalBackground>
          )}
        </JobResultsPortalWrapper>
      </PageWrapper>
    );
  }
}

export default JobPortal;
