import React, { useState } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import DeleteModal from './DeleteModal.jsx';

const Wrapper = schema.listCard;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  ${schema.modalBackdrop}
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
      {date}
      {type}
      {text}
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
