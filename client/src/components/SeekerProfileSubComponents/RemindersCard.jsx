import React, { useState } from 'react';
import styled from 'styled-components';

import DeleteModal from './DeleteModal.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 15vh;
  width: 95%;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  border-radius: 5px;
  margin: .2vh 0;
  padding: .5vh 1%;
  font-family: Arial, sans-serif;
  color: #424242;
`;

const ReminderWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div``;

const Category = styled.div``;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Start = styled.div``;

const End = styled.div``;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: #42424275;
`;

const RemindersCard = (props) => {
  const {
    reminder: {
      startTime, endTime, category, title, appointmentNote, dateCreated
    },
  } = props;

  const [show, setShow] = useState('false');

  const toggleModal = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  const formatDate = (times) => {
    let date = times.slice(0, 10).split('-');
    const year = Number(date[0]);
    const month = Number(date[1]) - 1;
    const day = Number(date[2]) - 1;
    date = new Date(year, month, day);

    const formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(date);
    return formattedDate;
  };
  const start = (formatDate(startTime));
  const end = (formatDate(endTime));

  return (
    <Wrapper onClick={toggleModal}>
      <ReminderWrapper>
        <Header>
          <TitleWrapper>
            <Title>
              {title}
            </Title>
            <Category>
              {category}
            </Category>
          </TitleWrapper>
          <TimeWrapper>
            <Start>
              {start}
            </Start>
            <End>
              {end}
            </End>
          </TimeWrapper>
        </Header>
        <Body>
          {appointmentNote}
        </Body>
      </ReminderWrapper>
      {!show
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <DeleteModal toggleModal={toggleModal} />
          </ModalBackground>
        ) : null}
    </Wrapper>

  );
};

export default RemindersCard;