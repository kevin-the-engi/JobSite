import React from 'react';
import styled from 'styled-components';

import FiltersModal from './FiltersModal.jsx';

const Wrapper = styled.div`
  width: max(10vw, 100px);
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
  letter-spacing: 2px;
  height: 5vh;
  padding: 0 1.25vw;
  background: #fff;
  border: 2px solid #129490;
  outline: none;
  border-radius: 25px;
  color: #129490;
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
    const { setFilters } = this.props;

    return (
      <Wrapper>
        <Button onClick={this.toggleModal}>FILTERS</Button>
        {show
          ? (
            <ModalBackground onMouseDown={this.toggleModal}>
              <FiltersModal setFilters={setFilters} />
            </ModalBackground>
          ) : null}
      </Wrapper>
    );
  }
}

export default Filters;
