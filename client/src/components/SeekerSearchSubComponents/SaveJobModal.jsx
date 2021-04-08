import React, { useState } from 'react';

const SaveJobModal = (props) => {
// const

  ReactDOM.createPortal(
    <Wrapper onMouseDown={(event) => { event.stopPropagation(); }}>
      <Options>
        <Form onSubmit={handleUpdate}>

          <ButtonWrapper>
            <Button type="submit">Update</Button>
            <Button onMouseDown={handleDelete}>Delete</Button>
          </ButtonWrapper>
        </Form>

      </Options>
    </Wrapper>,
    document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
  );
};

export default SaveJobModal;
