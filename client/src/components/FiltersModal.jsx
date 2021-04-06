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
  align-items: center;
  max-height: 95vh;
`;

const RangeLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Legend = styled.legend`
  color: #424242;
`;

const FieldSet = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  margin: 1vh 0;
  width: 95%;

  @media (min-width: 768px) {
    flex-wrap: none;
    justify-content: space-between;
  }
`;

const Figures = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Figure = styled.div`
  flex-basis: 1;
  text-align: center;
  width: 2.5vw;
`;

const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  top: 2px;
  border-radius: 50%;
  background-color: #fff;

  position: relative;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 1px solid #424242;
  &:checked {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: relative;
    top: 2px;
    background-color: #5fa317;
    background-clip: content-box;
    padding: 1px;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid #424242;
  }
  &:focus { outline: none; }
`;

const Range = styled.input`
/*Chrome*/
  -webkit-appearance: none;
  overflow: hidden;
  width: 100%;
  background-color: #e0e0e0;

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 10px;
    color: #5fa317;
    margin-top: -1px;
  }
  ::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 20px;
    cursor: ew-resize;
    background: #424242;
    box-shadow: -600px 0 0 600px #5fa317;
  }
/** FF*/
  ::-moz-range-progress {
    background-color: #424242;
  }
  ::-moz-range-track {
    background-color: #e0e0e0;
  }
/* IE*/
  ::-ms-fill-lower {
    background-color: #e0e0e0;
  }
  ::-ms-fill-upper {
    background-color: #5fa317;
  }
}
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
      locationType: 'both',
      salary: 0,
      datePosted: 'anytime',
      locationRange: 'anywhere'
    };
    this.expanded = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const { value } = event.target;

    this.setState({
      [field]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const filters = Object.assign(this.state);
    delete filters.range;

    this.props.setFilters(filters);
  }

  render() {
    const {
      range: { min, max }, locationType, salary, datePosted, locationRange,
    } = this.state;

    return ReactDOM.createPortal(
      <Wrapper onMouseDown={(event) => event.stopPropagation()}>
        <Options>
          <Form id="filters" onSubmit={this.handleSubmit}>
            <FieldSet id="employment" onChange={this.handleChange}>
              <Legend>Type of Employment</Legend>
              <label htmlFor="employment">
                <Radio type="radio" name="employment" value="fulltime" />
                Full time
              </label>
              <label htmlFor="employment">
                <Radio type="radio" name="employment" value="parttime" />
                Part time
              </label>
              <label htmlFor="employment">
                <Radio type="radio" name="employment" value="contract" />
                Contract
              </label>
              <label htmlFor="employment">
                <Radio type="radio" name="employment" value="temporary" />
                Temporary
              </label>
              <label htmlFor="employment">
                <Radio type="radio" name="employment" value="internship" />
                Internship
              </label>
            </FieldSet>

            <FieldSet id="experience" onChange={this.handleChange}>
              <Legend>Experience Level</Legend>
              <label htmlFor="experience">
                <Radio type="radio" name="experience" value="entry" />
                Entry Level
              </label>
              <label htmlFor="experience">
                <Radio type="radio" name="experience" value="mid" />
                Mid Level
              </label>
              <label htmlFor="experience">
                <Radio type="radio" name="experience" value="senior" />
                Senior Level
              </label>
              <label htmlFor="experience">
                <Radio type="radio" name="experience" value="executive" />
                Executive Level
              </label>
            </FieldSet>

            <FieldSet id="locationType" onChange={this.handleChange}>
              <Legend>Remote or Onsite</Legend>
              <label htmlFor="locationType">
                <Radio type="radio" name="locationType" value="both" checked={locationType === 'both'} />
                Both
              </label>
              <label htmlFor="locationType">
                <Radio type="radio" name="locationType" value="remote" />
                Remote
              </label>
              <label htmlFor="locationType">
                <Radio type="radio" name="locationType" value="onsite" />
                Onsite
              </label>
            </FieldSet>

            <FieldSet>
              <Legend>Salary</Legend>
              <RangeLabel htmlFor="salary">
                <Figures>
                  <Figure>0k</Figure><Figure>10</Figure><Figure>20</Figure>
                  <Figure>30</Figure><Figure>40</Figure><Figure>50</Figure>
                  <Figure>60</Figure><Figure>70</Figure><Figure>80</Figure>
                  <Figure>90</Figure><Figure>100</Figure><Figure>110</Figure>
                  <Figure>120k+</Figure>
                </Figures>
                <Range id="salary" name="salary" type="range" min={min} max={max} value={salary} step="10000" onChange={this.handleChange} />
              </RangeLabel>
            </FieldSet>

            <FieldSet id="datePosted" onChange={this.handleChange}>
              <Legend>Date Posted</Legend>
              <label htmlFor="datePosted">
                <Radio type="radio" name="datePosted" value="anytime" checked={datePosted === 'anytime'} />
                Anytime
              </label>
              <label htmlFor="datePosted">
                <Radio type="radio" name="datePosted" value="past1D" />
                Past 24 Hours
              </label>
              <label htmlFor="datePosted">
                <Radio type="radio" name="datePosted" value="past3D" />
                Past 3 Days
              </label>
              <label htmlFor="datePosted">
                <Radio type="radio" name="datePosted" value="past7D" />
                Past 7 Days
              </label>
              <label htmlFor="datePosted">
                <Radio type="radio" name="datePosted" value="past14D" />
                Past 14 Days
              </label>
              <label htmlFor="datePosted">
                <Radio type="radio" name="datePosted" value="past30D" />
                Past 30 Days
              </label>
            </FieldSet>

            <FieldSet id="locationRange" onChange={this.handleChange}>
              <Legend>Date Posted</Legend>
              <label htmlFor="locationRange">
                <Radio type="radio" name="locationRange" value="anywhere" checked={locationRange === 'anywhere'} />
                Anywhere
              </label>
              <label htmlFor="locationRange">
                <Radio type="radio" name="locationRange" value="5miles" />
                5 Miles
              </label>
              <label htmlFor="locationRange">
                <Radio type="radio" name="locationRange" value="10miles" />
                10 Miles
              </label>
              <label htmlFor="locationRange">
                <Radio type="radio" name="locationRange" value="20miles" />
                20 Miles
              </label>
              <label htmlFor="locationRange">
                <Radio type="radio" name="locationRange" value="50miles" />
                50 Miles
              </label>
              <label htmlFor="locationRange">
                <Radio type="radio" name="locationRange" value="100miles" />
                100 Miles
              </label>
            </FieldSet>
            <Button type="submit" value="Filter Results">Filter Results</Button>
          </Form>
        </Options>
      </Wrapper>,
      document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
    );
  }
}

export default FiltersModal;
