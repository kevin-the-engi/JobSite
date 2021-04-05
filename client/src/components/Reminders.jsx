import React from 'react';
import styled from 'styled-components';

import RemindersCard from './RemindersCard.jsx';

const Reminders = (props) => {
  const reminders = [
    {date: '4th April', type: 'Follow-up', text: 'Reminder text'},
    {date: '5th April', type: 'Interview', text: 'Reminder text'},
    {date: '10th April', type: 'Profit', text: 'Reminder text'},
    {date: '10th April', type: 'Profit', text: 'Reminder text'},
    {date: '10th April', type: 'Profit', text: 'Reminder text'},
    {date: '10th April', type: 'Profit', text: 'Reminder text'},
    {date: '10th April', type: 'Profit', text: 'Reminder text'},
    {date: '10th April', type: 'Profit', text: 'Reminder text'},
  ];

  return(
    <div>
      {reminders.map(reminder =>
        <RemindersCard
          reminder={reminder}
        />
      )}
    </div>
  )
};

export default Reminders;