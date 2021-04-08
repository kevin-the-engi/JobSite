import React, { useState} from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import NotesUpdateModal from './NotesUpdateModal.jsx';

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
  const { note: { title, text, category } } = props;
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
            <NotesUpdateModal text={text} />
          </ModalBackground>
        ) : null}
    </Wrapper>
  );
};

export default NotesCard;
