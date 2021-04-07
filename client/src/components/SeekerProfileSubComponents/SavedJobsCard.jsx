import React, { useState } from 'react';
import styled from 'styled-components';

import TransferModal from './TransferModal.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 10vh;
  width: 95%;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  border-radius: 5px;
  margin: .2vh 0;
  padding: .5vh 1%;
  font-family: Arial, sans-serif;
  color: #424242;
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

const SavedJobsCard = (props) => {
  const { job: { name, company, description } } = props;
  const [show, setShow] = useState('false');

  const toggleModal = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  return (
    <Wrapper onClick={toggleModal}>
      {name} {company} {description}
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