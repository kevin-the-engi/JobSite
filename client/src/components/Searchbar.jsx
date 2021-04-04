import React, { useState } from 'react';

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
    <form id="searchbar" onSubmit={handleSubmit}>
      <input
        id="search"
        onChange={handleChange}
        type="text"
        name="search"
        value={search}
        placeholder="Enter search term..."
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       search: '',
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

//     this.props.setSearch(this.state.search);
//   }

//   render() {
//     const { search } = this.state;

//     return (
//       <form id="searchbar" onSubmit={this.handleSubmit}>
//         <input
//           id="search"
//           onChange={this.handleChange}
//           type="text"
//           name="search"
//           value={search}
//           placeholder="Enter search term..."
//         />
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }


export default SearchBar;
