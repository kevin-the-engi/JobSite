import React from 'react';
import styled from 'styled-components';
import { get, post } from '../../http';
import schema from './constants.jsx';

import Account from './SeekerProfileSubComponents/Account.jsx';

const SeekerPortalWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 94vh;
  }
`;

const NavButtonDiv = schema.navButtonDiv;
const NavButton = schema.navButton;

class SeekerPortal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seekerId: '606d2039fa660c4ce0b471fd',
      reminders: [],
      savedJobs: [],
      appliedJobs: [],
      notes: [],
    };
    // this.deleteAppointment = this.deleteAppointment.bind(this);
    this.postNote = this.postNote.bind(this);
  }

  // Dummy data
  componentDidMount() {
    get('api/seekerdata/all', { seekerId: this.state.seekerId })
      .then((data) => {
        this.setState({
          reminders: data.appointments,
          savedJobs: data.savedJobs,
          appliedJobs: data.applications,
          notes: data.notes,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postNote(note) {
    const noteBody = {
      seekerId: this.state.seekerId,
      noteObj: note,
    };

    // hook up to the notes component somewhere
    post('api/seekerdata/note', noteBody)
      .then(() => {
        get('api/seekerdata/note/all', { seekerId: this.state.seekerId })
          .then((data) => {
            this.setState({
              notes: data.notes,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      seekerId, reminders, savedJobs, appliedJobs, notes,
    } = this.state;

    return (
      <SeekerPortalWrapper>
        <NavButtonDiv>
          <NavButton href={`${window.location.origin}/#/seeker`}>PROFILE</NavButton>
          <NavButton href={`${window.location.origin}/#/jobs`}>JOBS</NavButton>
        </NavButtonDiv>
        <Account
          seekerId={seekerId}
          reminders={reminders}
          savedJobs={savedJobs}
          appliedJobs={appliedJobs}
          notes={notes}
          postNote={this.postNote}
        />
      </SeekerPortalWrapper>
    );
  }
}

export default SeekerPortal;
