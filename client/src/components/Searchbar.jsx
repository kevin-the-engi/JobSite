import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
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
    const {search} = this.state;

    return(
      <form id="search" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="search"
          value={search}
          placeholder="Enter search term...">
        </input>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}

export default SearchBar;
