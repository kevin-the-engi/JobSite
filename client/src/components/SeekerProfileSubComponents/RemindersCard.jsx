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

const Title = styled.h1`
  margin: 0.5vh 1vw;
  color: ${schema.primary};
  font-size: 1rem;
  font-weight: bold;
`;

const Category = styled.div`
  margin: 0.25vh 1vw 0 2vw;
  font-style: italic;
`;

const SpacedRowDiv = styled.div`
  margin: .25vh 1vw;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 0.5vh 1vw 0 2vw;
  font-weight: lighter;
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
      _id, startTime, endTime, category, title, appointmentNote, dateCreated,
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
        <SpacedRowDiv>
          <Title>
            {`Title: ${title}`}
          </Title>
          <Category>
            {`Category: ${category}`}
          </Category>
        </SpacedRowDiv>
        <Text>
          {`From: ${start}, To: ${end}`}
        </Text>
        <Text>
          {appointmentNote}
        </Text>
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
