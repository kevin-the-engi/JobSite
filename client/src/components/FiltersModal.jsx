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
      employment: '',
      experience: '',
      range: {
        min: 0,
        max: 120000,
      },
      salary: 0,
      datePosted: 'anytime',
      locationRange: 'anywhere'
    };
    this.expanded = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let field = event.target.name;
    let value = event.target.value;

    this.setState({
      [field]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { range: { min, max }, salary, datePosted, locationRange } = this.state;

    return ReactDOM.createPortal(
      <Wrapper>
        <Options onMouseDown={(event) => event.stopPropagation()}>
          <form onSubmit={this.handleSubmit}>
            <fieldset onChange={this.handleChange}>
              <legend>Type of Employment</legend>
              <label htmlFor="employment">
                <input type="radio" name="employment" value="fulltime" />
                Full time
              </label>
              <label htmlFor="employment">
                <input type="radio" name="employment" value="parttime" />
                Part time
              </label>
              <label htmlFor="employment">
                <input type="radio" name="employment" value="contract" />
                Contract
              </label>
              <label htmlFor="employment">
                <input type="radio" name="employment" value="temporary" />
                Temporary
              </label>
              <label htmlFor="employment">
                <input type="radio" name="employment" value="internship" />
                Internship
              </label>
            </fieldset>

            <fieldset onChange={this.handleChange}>
              <legend>Experience Level</legend>
              <label htmlFor="experience">
                <input type="radio" name="experience" value="entry" />
                Entry Level
              </label>
              <label htmlFor="experience">
                <input type="radio" name="experience" value="mid" />
                Mid Level
              </label>
              <label htmlFor="experience">
                <input type="radio" name="experience" value="senior" />
                Senior Level
              </label>
              <label htmlFor="experience">
                <input type="radio" name="experience" value="executive" />
                Executive Level
              </label>
            </fieldset>

            <fieldset onChange={this.handleChange}>
              <legend>Remote or Onsite</legend>
              <label htmlFor="locationType">
                <input type="radio" name="locationType" value="remote" />
                Remote
              </label>
              <label htmlFor="locationType">
                <input type="radio" name="locationType" value="onsite" />
                Onsite
              </label>
              <label htmlFor="locationType">
                <input type="radio" name="locationType" value="mixed" />
                Mixed
              </label>
            </fieldset>

            <fieldset>
              <legend>Salary</legend>
              <label htmlFor="salary">
                $0
                <input name="salary" type="range" min={min} max={max} value={salary} step="10000" onChange={this.handleChange} />
                $120k+
              </label>
            </fieldset>

            <fieldset onChange={this.handleChange}>
              <legend>Date Posted</legend>
              <label htmlFor="datePosted">
                <input type="radio" name="datePosted" value="anytime" checked={datePosted === 'anytime'} />
                Anytime
              </label>
              <label htmlFor="datePosted">
                <input type="radio" name="datePosted" value="past1D" />
                Past 24 Hours
              </label>
              <label htmlFor="datePosted">
                <input type="radio" name="datePosted" value="past3D" />
                Past 3 Days
              </label>
              <label htmlFor="datePosted">
                <input type="radio" name="datePosted" value="past7D" />
                Past 7 Days
              </label>
              <label htmlFor="datePosted">
                <input type="radio" name="datePosted" value="past14D" />
                Past 14 Days
              </label>
              <label htmlFor="datePosted">
                <input type="radio" name="datePosted" value="past30D" />
                Past 30 Days
              </label>
            </fieldset>

            <fieldset onChange={this.handleChange}>
              <legend>Date Posted</legend>
              <label htmlFor="locationRange">
                <input type="radio" name="locationRange" value="anywhere" checked={locationRange === 'anywhere'} />
                Anywhere
              </label>
              <label htmlFor="locationRange">
                <input type="radio" name="locationRange" value="5miles" />
                5 Miles
              </label>
              <label htmlFor="locationRange">
                <input type="radio" name="locationRange" value="10miles" />
                10 Miles
              </label>
              <label htmlFor="locationRange">
                <input type="radio" name="locationRange" value="20miles" />
                20 Miles
              </label>
              <label htmlFor="locationRange">
                <input type="radio" name="locationRange" value="50miles" />
                50 Miles
              </label>
              <label htmlFor="locationRange">
                <input type="radio" name="locationRange" value="100miles" />
                100 Miles
              </label>
            </fieldset>
              <input type="submit" value="Submit"></input>
          </form>
        </Options>
      </Wrapper>,
      document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
    );
  }
}

export default FiltersModal;
