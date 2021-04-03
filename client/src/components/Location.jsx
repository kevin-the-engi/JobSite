import React from 'react';

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let field = event.target.name;
    let value = event.target.value;

    this.setState({
      [field]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    const {location} = this.state;

    return(
      <form id="location" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="location"
          value={location}
          placeholder="Enter location...">
        </input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}

export default Location;