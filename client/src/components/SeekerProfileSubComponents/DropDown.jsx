import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Select = styled.select`
`;

const Option = styled.option`
`;

const DropDown = (props) => {
  const [selected, setSelected] = useState('extremelyInterested');

  const handleSelect = (event) => {
    const { id } = event.target;

    setSelected(id);
  };

  useEffect(() => {
    // console.log(selected);
    // call back selected from here
  });

  return (
    <Select id="interest-select" onChange={handleSelect}>
      <Option id="exInterested" value={selected}>Extremely Interested</Option>
      <Option id="veryInterested" value={selected}>Very Interested</Option>
      <Option id="interested" value={selected}>Interested</Option>
    </Select>
  );
};

export default DropDown;