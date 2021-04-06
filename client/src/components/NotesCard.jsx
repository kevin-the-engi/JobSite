import React from 'react';
import styled from 'styled-components';

const NotesCardWrapper = styled.div`
  width: 95%;
  height: 10vh;
  border: 2px solid yellow;
  border-radius: 10px;
`;

const NotesCard = (props) => {
  const { note: { title, text } } = props;

  return(
    <NotesCardWrapper>
      {title} {text}
    </NotesCardWrapper>
  )
}

export default NotesCard;