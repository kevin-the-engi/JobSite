import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: table;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-width: 70vw;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const Options = styled.div`
  background: fff;
  display: block;
  max-height: 95vh;
  width: 60vw;
`;

class FiltersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 120000,
      value: 0,
    };
    this.expanded = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(this.expanded);
    console.log(event.target);
  }

  render() {
    const { min, max, value } = this.state;

    return ReactDOM.createPortal(
      <Wrapper>
        <Options onMouseDown={(event) => event.stopPropagation()}>
          <form ref={this.expanded}>
            <fieldset onChange={this.handleChange} ref={this.expanded}>
              <legend>Type of Employment</legend>
              <label htmlFor="employment">
                <input type="radio" name="employment" id="fulltime" />
                Full time
              </label>
              <label htmlFor="employment">
                <input type="radio" name="employment" id="parttime" />
                Part time
              </label>
              <label htmlFor="employment">
                <input type="radio" name="employment" id="contract" />
                Contract
              </label>
              <label htmlFor="employment">
                <input type="radio" name="employment" id="temporary" />
                Temporary
              </label>
              <label htmlFor="employment">
                <input type="radio" name="employment" id="internship" />
                Internship
              </label>
            </fieldset>

            <fieldset onChange={this.handleChange}>
              <legend>Experience Level</legend>
              <label htmlFor="experience">
                <input type="radio" name="experience" id="entry" />
                Entry Level
              </label>
              <label htmlFor="experience">
                <input type="radio" name="experience" id="mid" />
                Mid Level
              </label>
              <label htmlFor="experience">
                <input type="radio" name="experience" id="senior" />
                Senior Level
              </label>
              <label htmlFor="experience">
                <input type="radio" name="experience" id="executive" />
                Executive Level
              </label>
            </fieldset>

            <fieldset onChange={this.handleChange}>
              <legend>Remote or Onsite</legend>
              <label htmlFor="locationType">
                <input type="radio" name="locationType" id="Remote" />
                Remote
              </label>
              <label htmlFor="locationType">
                <input type="radio" name="locationType" id="Onsite" />
                Onsite
              </label>
              <label htmlFor="locationType">
                <input type="radio" name="locationType" id="Mixed" />
                Mixed
              </label>
            </fieldset>

            <label htmlFor="salary">
              $0
              <input type="range" min={min} max={max} defaultValue={value} onMouseUp={this.handleChange} />
              $120k+
            </label>
          </form>
        </Options>
      </Wrapper>,
      document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
    );
  }
}

export default FiltersModal;
