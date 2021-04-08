import React from 'react';
import styled from 'styled-components';

import PostJobModal from './PostJobModal.jsx';
import schema from '../constants.jsx';

const UpperDashboardWrapper = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: #42424275;
`;

const Button = styled.button`
  width: max(30vw, 300px);
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  height: 5vh;
  padding: 0 1.25vw;
  background: ${schema.secondary};
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
`;

class PostJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { show } = this.state;

    return (
      <UpperDashboardWrapper>
        <Button type="submit" onClick={this.toggleModal}>POST A NEW JOB</Button>
        { show
          ? (
            <ModalBackground onMouseDown={this.toggleModal}>
              <PostJobModal employerId={this.props.employerId} toggleModal={this.toggleModal} />
            </ModalBackground>
          ) : null}
      </UpperDashboardWrapper>
    );
  }
}

export default PostJob;
