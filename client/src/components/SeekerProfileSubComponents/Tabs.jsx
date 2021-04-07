import React, { useState } from 'react';
import styled from 'styled-components';

import Reminders from './Reminders.jsx';
import SavedJobs from './SavedJobs.jsx';
import AppliedJobs from './AppliedJobs.jsx';
import Notes from './Notes.jsx';

const PersonalContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 3vh 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFF;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23);
  font-family: Arial, sans-serif;
  color: #424242;

  @media (min-width: 768px) {
    width: 60vw;
    margin: 0;
  }
`;

const TabsWrapper = styled.div`
  width: 97%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Tab = styled.div`
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ContentWrapper = styled.div`
  width: 97%;
  height: 92%;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

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