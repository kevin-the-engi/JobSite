import React, { useState } from 'react';
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

const Body = styled.div`
`;

const ButtonWrapper = styled.div`
`;

const Button = styled.div``;

const NotesCard = (props) => {
  const { note: { title, text } } = props;
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    console.log('wrapper');

    setShow(!show);
  };

  const handleChange = (event) => {

  }

  const handleUpdate = (event) => {
    event.preventDefault();
    setUpdate(!update);
  }

  const handleSubmit = (event) => {

  }

  return (
    <Wrapper onClick={toggleModal}>
      <Body>
        {update ? (
          <Form onSubmit={handleSubmit}>
            <TextArea
              id="noteText"
              name="note"
              rows="10"
              cols="30"
              onChange={handleChange}
              value={note}
            />
            <ButtonWrapper>
              <Button type="submit" value="Submit">Submit</Button>
            </ButtonWrapper>
          </Form>) : {text} }
      </Body>
      <ButtonWrapper>
        <Button onClick={handleUpdate}>Update</Button>
        <Button >Delete</Button>
        {/* {show
          ? (
            <ModalBackground>
              <NotesUpdateModal text={text} />
            </ModalBackground>
          ) : null} */}

      </ButtonWrapper>
    </Wrapper>
  );
};

export default NotesCard;
