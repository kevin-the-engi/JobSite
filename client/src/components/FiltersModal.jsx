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
  // -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  // width: 100%; /* Specific width is required for Firefox. */
  // background: transparent; /* Otherwise white in Chrome */
  // ::-webkit-slider-thumb {
  //   -webkit-appearance: none;
  // }
  // &:focus { outline: none; }
  // ::-ms-track {
  //   width: 100%;
  //   cursor: pointer;
  //   /* Hides the slider so custom styles can be added */
  //   background: transparent;
  //   border-color: transparent;
  //   color: transparent;
  // }
  // ::-webkit-slider-thumb {
  //   -webkit-appearance: none;
  //   border: 1px solid #424242;
  //   height: 20px;
  //   width: 20px;
  //   border-radius: 50%;
  //   background: #5fa317;
  //   cursor: pointer;
  //   background-clip: content-box;
  //   padding: 1px;
  //   margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  //   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
  // }

  // /* All the same stuff for Firefox */
  // ::-moz-range-thumb {
  //   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  //   border: 1px solid #424242;
  //   height: 20px;
  //   width: 20px;
  //   border-radius: 50%;
  //   background: #5fa317;
  //   background-clip: content-box;
  //   padding: 1px;
  //   cursor: pointer;
  // }

  // /* All the same stuff for IE */
  // ::-ms-thumb {
  //   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  //   border: 1px solid #424242;
  //   height: 20px;
  //   width: 20px;
  //   border-radius: 50%;
  //   background-clip: content-box;
  //   padding: 1px;
  //   background: #5fa317;
  //   cursor: pointer;
  // }

  // ///////////////////

  // ::-webkit-slider-runnable-track {
  //   width: 80%;
  //   height: 10px;
  //   cursor: pointer;
  //   // box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  //   background: #e0e0e0;
  //   border-radius: 3px;
  // }

  // :focus::-webkit-slider-runnable-track {
  //   background: #e0e0e0;
  // }

  // ::-moz-range-track {
  //   width: 80%;
  //   height: 10px;
  //   cursor: pointer;
  //   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  //   background: #5fa317;
  //   border-radius: 1.3px;
  //   border: 0.2px solid #010101;
  // }

  // ::-ms-track {
  //   width: 80%;
  //   height: 10px;
  //   cursor: pointer;
  //   background: transparent;
  //   border-color: transparent;
  //   border-width: 16px 0;
  //   color: transparent;
  // }
  // ::-ms-fill-lower {
  //   background: #2a6495;
  //   border: 0.2px solid #010101;
  //   border-radius: 2.6px;
  //   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  // }
  // :focus::-ms-fill-lower {
  //   background: #3071a9;
  // }
  // ::-ms-fill-upper {
  //   background: #3071a9;
  //   border: 0.2px solid #010101;
  //   border-radius: 2.6px;
  //   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  // }
  // :focus::-ms-fill-upper {
  //   background: #367ebd;
  // }

    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;

  &:focus { outline: none; }
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  ::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }
  ::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  ::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  ::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  ::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  ::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  ::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #3071a9;
  }
  &:focus::-ms-fill-upper {
    background: #367ebd;
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
    alert('submitted');
  }

  render() {
    const { range: { min, max }, yearsExperience, educationLevel, desiredSalary } = this.state;

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
