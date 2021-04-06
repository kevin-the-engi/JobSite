  import React from 'react';
import styled from 'styled-components';

const ListDetailWrapper = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid orange;
`;

const ListingDetail = (props) => (
  <ListDetailWrapper>here there be listing details</ListDetailWrapper>
);

export default ListingDetail;
