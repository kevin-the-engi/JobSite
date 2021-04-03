import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: table;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 70vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const Options = styled.div`
  background: fff;
  display: block;
  max-height: 95vh;
  width: 60vw;
`;

class FiltersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.expanded = React.createRef();
  }

  render() {
    return ReactDOM.createPortal(
      <Wrapper>
        <Options onMouseDown={(event) => event.stopPropagation()}>

        </Options>
      </Wrapper>,
      document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
    );
  }
}

export default FiltersModal;
