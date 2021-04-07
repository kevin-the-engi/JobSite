import React, { useState } from 'react';
import styled from 'styled-components';

import DeleteModal from './DeleteModal.jsx';

const Wrapper = styled.div`
  width: 98%;
  height: 10vh;
  // border: 2px solid yellow;
  background: #FFF;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
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

const RemindersCard = (props) => {
  const { reminder: { date, type, text } } = props;
  const [show, setShow] = useState('false');

  const toggleModal = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  return (
    <Wrapper onClick={toggleModal}>
      {date} {type} {text}
      {!show
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <DeleteModal toggleModal={toggleModal} />
          </ModalBackground>
        ) : null}
    </Wrapper>

  );
};

export default RemindersCard;