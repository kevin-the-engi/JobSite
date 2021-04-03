/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: table;
  background: #fff;
  padding: 2vh 2vw;
  border-radius: 10px;
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
  display: block;
  max-height: 95vh;
  width: 60vw;
`;

const Legend = styled.legend`
  color: #424242;
`;

const FieldSet = styled.fieldset`
  border-radius: 5px;
`;

const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;

  position: relative;
  content: '';
  display: inline-block;
  visibility: visible;
  border: 1px solid #424242;
  &:checked {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: relative;
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
  overflow-x: hidden;
  width: 90%;
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
    // cursor: ew-resize;
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

class FiltersModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearsExperience: '',
      range: {
        min: 0,
        max: 120000,
      },
      educationLevel: '',
      desiredSalary: 0,
    };
    this.expanded = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const field = event.target.id;
    const { value } = event.target;

    this.setState({
      [field]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.toggleModal();
  }

  render() {
    const {
      range: { min, max }, yearsExperience, educationLevel, desiredSalary,
    } = this.state;

    return ReactDOM.createPortal(
      <Wrapper onMouseDown={(event) => event.stopPropagation()}>
        <Options>
          <form onSubmit={this.handleSubmit}>
            <FieldSet onChange={this.handleChange}>
              <Legend>Years of Experience</Legend>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="0–2" />
                0–2
              </label>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="3–5" />
                3–5
              </label>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="6–9" />
                6–9
              </label>
              <label htmlFor="yearsExperience">
                <Radio type="radio" name="yearsExperience" id="10+" />
                10+
              </label>
            </FieldSet>
            <FieldSet onChange={this.handleChange}>
              <Legend>Level of Education</Legend>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="highSchoolDiploma" />
                High School Diploma
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="associates" />
                Associates
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="bachelors" />
                Bachelors
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="masters" />
                Masters
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="phd" />
                PhD
              </label>
              <label htmlFor="educationLevel">
                <Radio type="radio" name="educationLevel" id="other" />
                other
              </label>
            </FieldSet>
            <FieldSet>
              <Legend>Desired Salary</Legend>
              <label htmlFor="desiredSalary">
                $0
                <Range id="desiredSalary" type="range" min={min} max={max} value={desiredSalary} step="10000" onChange={this.handleChange} />
                $120k+
              </label>
            </FieldSet>
            <input type="submit" value="Filter Results" />
          </form>
        </Options>
      </Wrapper>,
      document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
    );
  }
}

export default FiltersModal;
