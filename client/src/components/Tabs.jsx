import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Reminders from './Reminders.jsx';
import SavedJobs from './SavedJobs.jsx';
import AppliedJobs from './AppliedJobs.jsx';
import Notes from './Notes.jsx';

const PersonalContentWrapper = styled.div`
  width: 60%;
  height: 77vh;
  border: 2px solid white;
`;

const TabsWrapper = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid red;
`;

const ContentWrapper = styled.div`
  border: 2px solid brown;
`;

const Tabs = (props) => {
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
    <PersonalContentWrapper>
      <TabsWrapper className="tabs">
        <div className="tab">
          <div id="reminders" onClick={handleClick}>Reminders</div>
        </div>

        <div className="tab">
          <div id="savedJobs" onClick={handleClick}>Jobs Saved</div>
        </div>

        <div className="tab">
          <div id="appliedJobs" onClick={handleClick}>Jobs Applied</div>
        </div>

        <div className="tab">
          <div id="notes" onClick={handleClick}>Notes</div>
        </div>
      </TabsWrapper>
      <ContentWrapper>
        {tab === 'reminders' ? <Reminders />: null}
        {tab === 'savedJobs' ? <SavedJobs />: null}
        {tab === 'appliedJobs' ? <AppliedJobs />: null}
        {tab === 'notes' ? <Notes />: null}
      </ContentWrapper>
    </PersonalContentWrapper>
  )
}

export default Tabs;