import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 46%;
    flex-direction: row;
  }
`;

const Input = styled.input`
  width: max(30vw, 250px);
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
  &:hover {
    cursor: pointer;
  }
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const { value } = event.target;

    this.setState({
      [field]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { search } = this.state;

    return (
      <Form id="search" onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleChange}
          type="text"
          name="search"
          value={search}
          placeholder="Enter search term..."
        />
        <Button type="submit" value="Search">SEARCH</Button>
      </Form>
    );
  }
}

export default SearchBar;
