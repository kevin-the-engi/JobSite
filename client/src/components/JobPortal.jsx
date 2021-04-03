import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar.jsx';
import SearchBar from './Searchbar.jsx';
import Location from './Location.jsx';
import Filters from './Filters.jsx';
import ListJobResults from './ListJobResults.jsx';
import ListingDetail from './ListingDetail.jsx';

const PageWrapper = styled.div`
  width: 95vw;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center
  justify-content: space-around;
  border: 2px solid pink;
`;

const SearchWrapper = styled.div`
  width: 95%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center
  justify-content: space-around;
  border: 2px solid green;
`;

const PortalWrapper = styled.div`
  width: 95%;
  height: 72vh;
  display: flex;
  flex-direction: row;
  align-items: center
  justify-content: space-around;
  border: 2px solid blue;
`;

class JobPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      location: '',
      jobResults: []
    }

    this.search = this.search.bind(this);
    this.location = this.location.bind(this);
  }

  componentDidMount() {

  }

  search(term) {

  }

  location(term) {

  }

  render() {
    const {search, location, jobResults} = this.state;

    return(
      <PageWrapper>
        <NavBar />
        <SearchWrapper>
          <SearchBar />
          <Location />
          <Filters />
        </SearchWrapper>
        <PortalWrapper>
          <ListJobResults jobResults={jobResults} />
          <ListingDetail />
        </PortalWrapper>
      </PageWrapper>
    )
  }

}

export default JobPortal;
