import React, { useState } from 'react';
import styled from 'styled-components';

import NotesCard from './NotesCard.jsx';
import AddNotesModal from './AddNotesModal.jsx';

const NotesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
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
  // const { notes, postNote } = props;
  const notes = [
    { title: 'This is the title', text: 'this is the body', category: 'this is a category' },
  ];

  const [showAdd, setShowAdd] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setShowAdd(!showAdd);
  };
  const dummySeekerId = '606d2039fa660c4ce0b471fd';
  // bring id from parent and replace
  return (
    <NotesWrapper>
      <HeaderWrapper>
        <Button onClick={toggleModal}>Add</Button>
      </HeaderWrapper>
      {showAdd
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <AddNotesModal
              seekerId={dummySeekerId}
              toggleModal={toggleModal}
              display={setShowAdd}
              // postNote={postNote}
            />
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
