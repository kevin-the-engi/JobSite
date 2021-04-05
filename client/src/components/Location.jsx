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

const Location = (props) => {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    setLocation(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setLocation(location);
  };

  return (
    <Form id="locationBar" onSubmit={handleSubmit}>
      <Input id="location" onChange={handleChange} type="text" name="location" value={location} placeholder="Enter location..." />
      <Button type="submit" value="Search">Search</Button>
    </Form>
  );
};

// class Location extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       location: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const field = event.target.name;
//     const { value } = event.target;

//     this.setState({
//       [field]: value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.setLocation(this.state.location);
//   }

//   render() {
//     const { location } = this.state;

//     return (
//       <form id="locationBar" onSubmit={this.handleSubmit}>
//         <input id="location" onChange={this.handleChange} type="text" name="location" value={location} placeholder="Enter location..." />
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

export default Location;
