import React from 'react';
import styled from 'styled-components';

import FiltersModal from './FiltersModal.jsx';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: #42424275;
`;

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    // this.showModal = this.showModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

  }

  // showModal() {
  //   this.setState({
  //     show: true,
  //   });
  // }

  toggleModal() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  // closeModal() {
  //   this.setState({
  //     show: false,
  //   });
  // }

  render() {
    const { show } = this.state;

    return (
      <div>
        <button onClick={this.toggleModal}>Filters</button>
        {show ?
          <ModalBackground onMouseDown={this.toggleModal}>
            <FiltersModal />
          </ModalBackground> : null}
      </div>
    );
  }
}

export default Filters;
