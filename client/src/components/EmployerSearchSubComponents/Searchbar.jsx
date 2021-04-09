import React from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import { get } from '../../../http';

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
  background: ${schema.secondary};
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
  ${schema.hoverEffect}
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
    if (this.state.search === '') { return; }
    get('api/resume/search', { params: this.state })
      .then((data) => console.log('This data needs to be called back to someplace: \n\n', data))
      .then(() => this.setState({ search: '' }))
      .catch((e) => console.log(e));
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
