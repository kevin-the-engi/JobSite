import React, { useState} from 'react';
import styled from 'styled-components';

import NotesUpdateModal from './NotesUpdateModal.jsx';

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

const NoteWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div``;

const Body = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
`;

const Button = styled.div``;

const NotesCard = (props) => {
  const { seekerId, note: { _id, title, text, category } } = props;
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    console.log('wrapper');

    setShow(!show);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    setUpdate(!update);
  }

  return (
    <Wrapper onClick={toggleModal}>
      <NoteWrapper>
        <Title>
          {title}
        </Title>
        <Body>
          {text}
        </Body>
      </NoteWrapper>
      {show
        ? (
          <ModalBackground>
            <NotesUpdateModal seekerId={seekerId} noteId={_id} text={text} />
          </ModalBackground>
        ) : null}
    </Wrapper>
  );
};

export default NotesCard;
