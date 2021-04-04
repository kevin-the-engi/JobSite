import React, { useState } from 'react';

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
    <form id="locationBar" onSubmit={handleSubmit}>
      <input id="location" onChange={handleChange} type="text" name="location" value={location} placeholder="Enter location..." />
      <input type="submit" value="Submit" />
    </form>
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
