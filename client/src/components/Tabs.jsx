import React, { useState, useEffect } from 'react';

import Reminders from './Reminders.jsx';
import SavedJobs from './SavedJobs.jsx';
import AppliedJobs from './AppliedJobs.jsx';
import Notes from './Notes.jsx';

const Tabs = () => {
  const [tab, setTab] = useState('reminders');

  const toggleTab = (id) => {
    setTab(id);
  }

  const handleClick = (event) => {
    const id = event.target.id;

    event.preventDefault();
    toggleTab(id);
  }

  return(
    <div className="container">
      <div className="tabs">
        <div id="reminders" onClick={handleClick}>
          Reminders
          {tab === 'reminders' ? <Reminders />: null}
        </div>

        <div id="savedJobs" onClick={handleClick}>
          Jobs Saved
          {tab === 'savedJobs' ? <SavedJobs />: null}
        </div>

        <div id="appliedJobs" onClick={handleClick}>
          Jobs Applied
          {tab === 'appliedJobs' ? <AppliedJobs />: null}
        </div>

        <div id="notes" onClick={handleClick}>
          Notes
          {tab === 'notes' ? <Notes />: null}
        </div>
      </div>
    </div>
  )
}

export default Tabs;