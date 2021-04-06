import React from 'react';
import styled from 'styled-components';

const RemindersCardWrapper = styled.div`
  width: 95%;
  height: 10vh;
  border: 2px solid yellow;
  border-radius: 10px;
`;

const RemindersCard = (props) => {
  const { reminder: { date, type, text } } = props;

  return(
    <RemindersCardWrapper>
      {date} {type} {text}
    </RemindersCardWrapper>
  );
};

export default RemindersCard;