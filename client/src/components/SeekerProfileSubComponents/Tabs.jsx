import React, { useState } from 'react';
import styled from 'styled-components';

import Reminders from './Reminders.jsx';
import SavedJobs from './SavedJobs.jsx';
import AppliedJobs from './AppliedJobs.jsx';
import Notes from './Notes.jsx';

const PersonalContentWrapper = styled.div`
  width: 60%;
  height: 77vh;
  display: flex;
  flex-direction: column;
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

const Tab = styled.div`
  width: 100%;
  background-color: whitesmoke;

  display: flex;
  justify-content: center;
  align-items: center;
  // border: 2px solid purple;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid brown;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  ::-ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`;

const Tabs = (props) => {
  const [tab, setTab] = useState('reminders');

  const toggleTab = (id) => {
    setTab(id);
  };

  const handleClick = (event) => {
    const { id } = event.target;

    event.preventDefault();
    toggleTab(id);
  };

  return (
    <PersonalContentWrapper>
      <TabsWrapper className="tabs">
        <Tab id="reminders" onClick={handleClick}>Reminders</Tab>
        <Tab id="savedJobs" onClick={handleClick}>Jobs Saved</Tab>
        <Tab id="appliedJobs" onClick={handleClick}>Jobs Applied</Tab>
        <Tab id="notes" onClick={handleClick}>Notes</Tab>
      </TabsWrapper>
      <ContentWrapper>
        {tab === 'reminders' ? <Reminders /> : null}
        {tab === 'savedJobs' ? <SavedJobs /> : null}
        {tab === 'appliedJobs' ? <AppliedJobs /> : null}
        {tab === 'notes' ? <Notes /> : null}
      </ContentWrapper>
    </PersonalContentWrapper>
  );
};

export default Tabs;