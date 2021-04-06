import React from 'react';
import styled from 'styled-components';

import NotesCard from './NotesCard.jsx';

const NotesWrapper = styled.div`
`;

const Notes = (props) => {
  const notes = [ { title: 'title', text: 'Notes here' } ]

  return(
    <NotesWrapper>
      {notes.map(note =>
        <NotesCard
          note={note}
        />
      )}
    </NotesWrapper>
  );
};

export default Notes;