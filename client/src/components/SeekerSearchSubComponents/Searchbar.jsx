import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 30vw;
    flex-direction: row;
  }
`;

const Input = styled.input`
  width: max(20vw, 250px);
  font-size: 1rem;
  font-weight: bold;
  height: 4.8vh;
  padding: 0 1.25vw;
  background: #fff;
  border: 1px solid #aeaeae;
  border-radius: 25px;
  color: #424242;
`;

const Button = styled.button`
  width: max(10vw, 150px);
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  height: 5vh;
  padding: 0 1.25vw;
  background: #129490;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
`;

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSearch(search);
  };

  return (
    <Form id="searchBar" onSubmit={handleSubmit}>
      <Input
        id="search"
        onChange={handleChange}
        type="text"
        name="search"
        value={search}
        placeholder="Enter search term..."
      />
      <Button type="submit" value="Search">SEARCH</Button>
    </Form>
  );
};

export default SearchBar;
