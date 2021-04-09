import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get } from '../../../http';

import RemindersCard from './RemindersCard.jsx';

const RemindersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  return (
    <RemindersWrapper>
      {reminders.map((reminder) => (
        <RemindersCard
          seekerId={seekerId}
          reminder={reminder}
        />
      ))}
    </RemindersWrapper>
  );
};

export default Reminders;
