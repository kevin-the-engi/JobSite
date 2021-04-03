import React from 'react';

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
      <form id="search" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="search"
          value={search}
          placeholder="Enter search term..."
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;
