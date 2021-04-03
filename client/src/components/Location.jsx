import React from 'react';

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
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
    const { location } = this.state;

    return (
      <form id="location" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="location" value={location} placeholder="Enter location..." />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Location;
