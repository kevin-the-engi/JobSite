import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import schema from '../constants.jsx';
import { get } from '../../../http';

import RemindersCard from './RemindersCard.jsx';
import AddReminderModal from './AddReminderModal.jsx';

const RemindersWrapper = styled.div`
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
  ${schema.modalBackdrop}
`;

const Button = styled.button`
  padding: 0 1.25vw;
  background: white;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
  ${schema.hoverEffect}
`;

const Reminders = (props) => {
  const { seekerId } = props;

  // replace once backend is hooked up
  const reminders = [
    {
      _id: '606d211bfa660c4ce0b471fe',
      startTime: '2021-04-09T10:15:00.000Z',
      endTime: '2021-04-10T10:45:00.000Z',
      category: 'personal',
      title: 'garbage',
      appointmentNote: 'shred all sensitive data before meeting',
      dateCreated: '2021-04-07T03:03:55.742Z',
    },
  ];
  const [display, setDisplay] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();

    setDisplay(!display);
  };

  return (
    <RemindersWrapper>
      <HeaderWrapper>
        <Button onClick={toggleModal}>Add</Button>
      </HeaderWrapper>
      {display
        ? (
          <ModalBackground onMouseDown={toggleModal}>
            <AddReminderModal
              seekerId={seekerId}
              display={setDisplay}
            />
          </ModalBackground>
        ) : null}
      {reminders.map((reminder) => (
        <RemindersCard
          key={reminder._id}
          seekerId={seekerId}
          reminder={reminder}
        />
      ))}
    </RemindersWrapper>
  );
};

export default Reminders;
