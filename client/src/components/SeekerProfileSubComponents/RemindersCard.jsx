import React, { useState } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import DeleteModal from './DeleteModal.jsx';

const Wrapper = schema.listCard;

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
  justify-content: right;
`;

const Start = styled.div`
  display: flex;
  justify-content: end;
`;

const End = styled.div`
  display: flex;
  justify-content: end;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  ${schema.modalBackdrop}
`;

const RemindersCard = (props) => {
  const {
    seekerId,
    reminder: {
      _id, startTime, endTime, category, title, appointmentNote, dateCreated
    },
  } = props;

  const [show, setShow] = useState('false');

  const toggleModal = (event) => {
    event.preventDefault();
    setShow(!show);
  };

  const formatDate = (times) => {
    let date = new Date(times);
    date = date.toString()
      .split(' ')
      .slice(0, 5)
      .join(' ')
      .trim();

    return date;
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
            <DeleteModal toggleModal={toggleModal} seekerId={seekerId} appointmentId={_id} />
          </ModalBackground>
        ) : null}
    </Wrapper>
  );
};

export default RemindersCard;
