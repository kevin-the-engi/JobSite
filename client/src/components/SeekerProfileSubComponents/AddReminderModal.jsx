import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { post } from '../../../http';
import schema from '../constants.jsx';

import NotesDropDown from './NotesDropDown.jsx';

const Wrapper = styled.div`
  height: 40vh;
  position: fixed;
  display: table;
  background: #fff;
  padding: 2vh 2vw 1vh 2vw;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 30vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Options = styled.div`
  height: 38vh;
  max-height: 95vh;
`;

const Form = styled.form`
  height: 38vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`;

const Input = styled.input`
`;

const TextArea = styled.textarea`
  padding: 2vh 1vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: max(10vw, 50px);
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  height: 5vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
  ${schema.hoverEffect}
`;

const AddReminderModal = (props) => {
  const { display, seekerId } = props;
  const [note, setNote] = useState('');
  const [reminderCategory, setReminderCategory] = useState('personal');
  const [reminderTitle, setReminderTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    setNote(value);
  };
  const handleTitleChange = (event) => {
    setReminderTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // call function to send data
    display(false);
  };

  const handleCategory = (category) => {
    setReminderCategory(category);
  };

  const handleStart = (event) => {
    const { value } = event.target;

    setStartTime(value);
  };

  const handleEnd = (event) => {
    const { value } = event.target;

    setEndTime(value);
  }

  useEffect(() => {
    let today = new Date();
    today = today.toISOString();

    setStartTime(today.slice(0, today.length - 5));
    setEndTime(today.slice(0, today.length - 5));
  }, []);

  const submitReminder = () => {
    const postData = {
      seekerId,
      noteObj: {
        category: reminderCategory,
        title: reminderTitle,
        appointmentNote: note,
      },
    };
    post('api/seekerdata/appointment', postData)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return ReactDOM.createPortal(
    <Wrapper onMouseDown={(event) => event.stopPropagation()}>
      <Options>
        <Form onSubmit={handleSubmit}>
          <Input onChange={handleTitleChange} type="input" placeholder="Title..." />
          <label htmlFor="starttime">
            Start
            <Input
              type="datetime-local"
              id="starttime"
              name="starttime"
              value={startTime}
              min={startTime}
              max="2021-06-14T00:00"
              onChange={handleStart}
            />
          </label>
          <label htmlFor="endtime">
            End
            <Input
              type="datetime-local"
              id="endtime"
              name="endtime"
              value={endTime}
              min={startTime}
              max="2021-06-14T00:00"
              onChange={handleEnd}
            />
          </label>
          <TextArea
            id="noteText"
            name="note"
            rows="10"
            cols="30"
            onChange={handleChange}
            value={note}
          />
          <NotesDropDown select={handleCategory} />
          <ButtonWrapper>
            <Button type="submit" onClick={submitReminder} value="Submit">Submit</Button>
          </ButtonWrapper>
        </Form>
      </Options>
    </Wrapper>,
    document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
  );
};

export default AddReminderModal;
