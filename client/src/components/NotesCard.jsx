import React from 'react';
import styled from 'styled-components';

const NotesCardWrapper = styled.div`
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