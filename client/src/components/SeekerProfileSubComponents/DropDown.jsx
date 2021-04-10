import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Select = styled.select`
`;

const Option = styled.option`
`;

const DropDown = ({ selectInterest }) => {
  const [selected, setSelected] = useState('exInterested');

  const handleSelect = (event) => {
    const { value } = event.target;
    setSelected(value);
    selectInterest(value);
  };

  return (
    <Select id="interest-select" value={selected} onChange={handleSelect}>
      <Option value="exInterested">Extremely Interested</Option>
      <Option value="veryInterested">Very Interested</Option>
      <Option value="interested">Interested</Option>
    </Select>
  );
};

export default DropDown;
