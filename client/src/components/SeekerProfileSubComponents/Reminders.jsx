import React from 'react';
import styled from 'styled-components';

import RemindersCard from './RemindersCard.jsx';

const RemindersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Reminders = () => {
  // const { reminders } = props;
  // replace once backend is hooked up
  const reminders = [
    { date: '4th April', type: 'Follow-up', text: 'Reminder text' },
    { date: '5th April', type: 'Interview', text: 'Reminder text' },
    { date: '10th April', type: 'Profit', text: 'Reminder text' },
    { date: '10th April', type: 'Profit', text: 'Reminder text' },
    { date: '10th April', type: 'Profit', text: 'Reminder text' },
    { date: '10th April', type: 'Profit', text: 'Reminder text' },
    { date: '10th April', type: 'Profit', text: 'Reminder text' },
    { date: '10th April', type: 'Profit', text: 'Reminder text' },
  ];

  return (
    <RemindersWrapper>
      {reminders.map((reminder) => (
        <RemindersCard
          reminder={reminder}
        />
      ))}
    </RemindersWrapper>
  );
};

export default Reminders;
