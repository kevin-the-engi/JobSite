import React from 'react';
import styled from 'styled-components';
import FiltersModal from './FiltersModal.jsx';
import schema from '../constants.jsx';

const Wrapper = styled.div`
  width: max(15vw, 250px);
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
  ${schema.modalBackdrop}
`;
const Button = schema.outlinedButton;

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
        <Button type="button" onClick={this.toggleModal}>FILTERS</Button>
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
