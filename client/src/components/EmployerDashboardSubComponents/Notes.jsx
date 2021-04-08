import React, { useState } from 'react';
import styled from 'styled-components';

import NotesCard from './NotesCard.jsx';
import AddNotesModal from './AddNotesModal.jsx';

const NotesWrapper = styled.div`
  width: 100%;
  height: 70%;
  // margin: 2vh 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 89%;
  height: 5%;
  background: #129490;
  color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
  padding: 0 1.25vw;
  background: white;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
`;

const Notes = (props) => {
  const notes = [
    { title: 'title', text: 'I need to call the interviewer.' },
  ];
  const [showAdd, setShowAdd] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setShowAdd(!showAdd);
    // send new note back up
  };
  const dummySeekerId = '606d2039fa660c4ce0b471fd';

  return (
    <NotesWrapper>
      <HeaderWrapper> Notes
        <Button onClick={toggleModal}>ADD NOTE</Button>
      </HeaderWrapper>
      {showAdd
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <AddNotesModal seekerId={dummySeekerId} toggleModal={toggleModal} display={setShowAdd} />
          </ModalBackground>
        ) : null}
      {notes.map((note) => (
        <NotesCard
          note={note}
        />
      ))}
    </NotesWrapper>
  );
};

export default Notes;
