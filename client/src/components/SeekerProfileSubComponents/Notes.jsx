import React, { useState } from 'react';
import styled from 'styled-components';

import NotesCard from './NotesCard.jsx';
import AddNotesModal from './AddNotesModal.jsx';

const NotesWrapper = styled.div`
`;

const HeaderWrapper = styled.div`
  border: 2px solid black;
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
    { title: 'title', text: 'Notes here' },
  ];
  const [showAdd, setShowAdd] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setShowAdd(!showAdd);
    // send new note back up
  };

  return (
    <NotesWrapper>
      <HeaderWrapper>
        <Button onClick={toggleModal}>Add</Button>
      </HeaderWrapper>
      {showAdd
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <AddNotesModal toggleModal={toggleModal} display={setShowAdd} />
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
