import React, { useState } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';

import TransferModal from './TransferModal.jsx';

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

const SavedJobsCard = (props) => {
  const { job: { name, company, description } } = props;
  const [show, setShow] = useState('false');

  const toggleModal = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  return (
    <Wrapper onClick={toggleModal}>
      {name}
      {company}
      {description}
      {!show
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <TransferModal toggleModal={toggleModal} tabName="saved" />
          </ModalBackground>
        ) : null}
    </Wrapper>
  );
};

export default SavedJobsCard;
