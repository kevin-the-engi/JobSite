import React from 'react';
import styled from 'styled-components';

import SearchBar from './components/Searchbar.jsx';
import Location from './components/Location.jsx';
import Filters from './components/Filters.jsx';
import ListJobResults from './components/ListJobResults.jsx';
import ListingDetail from './components/ListingDetail.jsx';
import NavBar from './components/NavBar.jsx';

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
      search: term
    };
  }

  setLocation(term) {
    this.setState = {
      location: term
    };
  }

  setFilters(filters) {
    this.setState = {
      filters: filters
    };
  }

  render() {
    const { jobResults } = this.state;

    return (
      <PageWrapper>
        <NavBar />
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
