import React from 'react';
import styled from 'styled-components';

import SearchBar from './SeekerSearchSubComponents/Searchbar.jsx';
import Location from './SeekerSearchSubComponents/Location.jsx';
import Filters from './SeekerSearchSubComponents/Filters.jsx';
import ListJobResults from './SeekerSearchSubComponents/ListJobResults.jsx';
import ListingDetail from './SeekerSearchSubComponents/ListingDetail.jsx';

const PageWrapper = styled.div`
  margin: auto;
  width: 95vw;
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid pink;
`;

const NavButtonDiv = styled.div`
  height: 6vh;
  width: 20vw;
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
  line-height: 4vh;
  width: auto;
  padding: .25vh 1vw;
  text-decoration: none;
  background: #129490;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
`;

const SearchWrapper = styled.div`
  width: 95%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 2px solid green;
`;

const JobResultsPortalWrapper = styled.div`
  width: 95%;
  height: 77vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 2px solid blue;
`;

class JobPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      location: '',
      filters: {},
      jobResults: [],
    };
    this.setSearch = this.setSearch.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setFilters = this.setFilters.bind(this);
  }

  componentDidMount() {

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

  render() {
    const { jobResults } = this.state;

    return (
      <PageWrapper>
        <NavButtonDiv>
          <NavButton href={`${window.location.origin}/#/seeker`}>My Profile</NavButton>
          <NavButton href={`${window.location.origin}/#/jobs`}>Find Jobs</NavButton>
        </NavButtonDiv>
        <SearchWrapper>
          <SearchBar setSearch={this.setSearch} />
          <Location setLocation={this.setLocation} />
          <Filters setFilters={this.setFilters} />
        </SearchWrapper>
        <JobResultsPortalWrapper>
          <ListJobResults jobResults={jobResults} />
          <ListingDetail />
        </JobResultsPortalWrapper>
      </PageWrapper>
    );
  }
}

export default JobPortal;
