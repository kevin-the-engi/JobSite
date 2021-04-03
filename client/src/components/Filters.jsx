import React from 'react';
import styled from 'styled-components';

import FiltersModal from './FiltersModal.jsx';

const Wrapper = styled.div`
  width: max(20vw, 300px);
  display: flex;
  justify-content: center;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: #42424275;
`;

const Button = styled.button`
  width: max(10vw, 150px);
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  height: 5vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
`;

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { show } = this.state;

    return (
      <Wrapper>
        <Button type="button" onClick={this.toggleModal}>Filters</Button>
        {show
          ? (
            <ModalBackground onMouseDown={this.toggleModal}>
              <FiltersModal toggleModal={this.toggleModal} />
            </ModalBackground>
          ) : null}
      </Wrapper>
    );
  }
}

export default Filters;
