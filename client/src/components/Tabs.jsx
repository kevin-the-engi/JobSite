import React, { useState, useEffect } from 'react';

import Reminders from './Reminders.jsx';
import SavedJobs from './SavedJobs.jsx';
import AppliedJobs from './AppliedJobs.jsx';
import Notes from './Notes.jsx';

const Tabs = () => {
  const [toggleState, setToggleState] = useState('reminders');

  const toggleTab = (id) => {
    setToggleState(id);
  }

  const handleClick = (event) => {
    event.preventDefault();

    let id = event.target.id;

    toggleTab(id);
  }

  return(
    <div className="container">
      <div className="tabs">
        <div id="reminders" onClick={handleClick}>
          Reminders
          {toggleState === 'reminders' ? <Reminders />: null}
        </div>

        <div id="savedJobs" onClick={handleClick}>
          Jobs Saved
          {toggleState === 'savedJobs' ? <SavedJobs />: null}
        </div>

        <div id="appliedJobs" onClick={handleClick}>
          Jobs Applied
          {toggleState === 'appliedJobs' ? <AppliedJobs />: null}
        </div>

        <div id="notes" onClick={handleClick}>
          Notes
          {toggleState === 'notes' ? <Notes />: null}
        </div>
      </div>
    </div>
  )
}

export default Tabs;