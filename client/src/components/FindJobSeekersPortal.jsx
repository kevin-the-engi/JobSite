import React from 'react';
import styled from 'styled-components';

import SearchBar from './Searchbar.jsx';
import Filters from './Filters.jsx';
import ListSeekerResults from './ListSeekerResults.jsx';
import ListingDetail from './ListingDetail.jsx';

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid green;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SeekerResultsPortalWrapper = styled.div`
  width: 95%;
  height: 77vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 2px solid blue;
`;

class FindJobSeekersPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      filters: {
      },
      jobResults: [],
    };

    this.setSearch = this.setSearch.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  componentDidMount() {

  }

  setSearch(term) {

  }

  setLocation(term) {

  }

  render() {
    const { jobSeekers } = this.state;

    return (
      <PageWrapper>
        <SearchWrapper>
          <SearchBar />
          <Filters />
        </SearchWrapper>
        <SeekerResultsPortalWrapper>
          <ListSeekerResults jobSeekers={jobSeekers} />
          <ListingDetail />
        </SeekerResultsPortalWrapper>
      </PageWrapper>
    );
  }
}

export default FindJobSeekersPortal;
