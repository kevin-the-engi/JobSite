import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: table;
  background: #fff;
  padding: 2vh 2vw 1vh 2vw;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 90vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Options = styled.div`
  max-height: 95vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
`;

const ButtonWrapper = styled.div`

`;

const Button = styled.button`
  width: max(10vw, 150px);
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  height: 5vh;
  padding: 0 1.25vw;
  background: none;
  border: 1px solid #424242;
  border-radius: 5px;
  color: #424242;
`;

const NotesModal = (props) => {
  const [note, setNote] = useState('Notes..');
  // setDefault state to notes prop

  const handleChange = (event) => {
    const { value } = event.target;

    setNote(value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

  };

  const handleDelete = (event) => {
    event.preventDefault();
  };

  return ReactDOM.createPortal(
    <Wrapper onMouseDown={(event) => event.stopPropagation()}>
      <Options>
        <Form onSubmit={handleUpdate}>
          <TextArea
            id="updateText"
            name="note"
            rows="5"
            cols="30"
            onChange={handleChange}
            value={note}
          />
          <ButtonWrapper>
            <Button type="submit">Update</Button>
            <Button onClick={handleDelete}>Delete</Button>

          </ButtonWrapper>
        </Form>

      </Options>
    </Wrapper>,
    document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
  );
};

export default NotesModal;
