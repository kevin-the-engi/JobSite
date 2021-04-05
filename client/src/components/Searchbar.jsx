import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 40%;
    flex-direction: row;
  }
`;

const Input = styled.input`
  width: max(30vw, 250px);
  font-size: 1rem;
  font-weight: bold;
  height: 4.8vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
`;

const Button = styled.button`
  width: max(10vw, 150px);
  font-size: 1rem;
  font-weight: bold;
  height: 5vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
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
    <Form id="searchbar" onSubmit={handleSubmit}>
      <Input
        id="search"
        onChange={handleChange}
        type="text"
        name="search"
        value={search}
        placeholder="Enter search term..."
      />
      <Button type="submit" value="Search">Search</Button>
    </Form>
  );
};

export default SearchBar;
