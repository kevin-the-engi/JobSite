/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import schema from '../constants.jsx';

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
    width: 40vw;
    height: 70vh;
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

  // @media (min-width: 768px) {
  //   justify-content: space-between;
  // }
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
    background-color: ${schema.primary};
    background-clip: content-box;
    padding: 1px;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 1px solid #424242;
  }
  &:focus { outline: none; }
`;

const Button = styled.button`
  width: max(10vw, 150px);
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

class PostJobModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearsExperience: '',
      // range: {
      //   min: 0,
      //   max: 120000,
      // },
      educationLevel: '',
      // desiredSalary: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.toggleModal();
  }

  render() {
    const { yearsExperience, educationLevel } = this.state;

    return ReactDOM.createPortal(
      <Wrapper onMouseDown={(event) => event.stopPropagation()}>
        <Options>
          <Form onSubmit={this.handleSubmit}>
            <label>
              Job Title:
              <input type="text" id="title" onChange={this.handleChange} />
            </label>

            <label>
              Industry:
              <input type="text" id="industry" onChange={this.handleChange} />
            </label>

            <label>
              Job Description:
              <textarea type="text" id="jobDescription" onChange={this.handleChange} />
            </label>

            <label>
              Requirements:
              <textarea type="text" id="requirements" onChange={this.handleChange} />
            </label>

            <label>Experience Level:</label>
            <select id="experienceLevel" onChange={this.handleChange}>
              <option selectde value="entry">Entry</option>
              <option value="mid">Mid</option>
              <option value="senior">Senior</option>
              <option value="executive">Executive</option>
            </select>

            <label>Employment Type:</label>
            <select id="employmentType" onChange={this.handleChange}>
              <option value="fulltime">Full-Time</option>
              <option value="partime">Part-Time</option>
              <option value="contract">Contract</option>
              <option value="temporary">Temporary</option>
              <option value="internship">Internship</option>
            </select>

            <label>
              Salary:
              <input type="text" id="salary" onChange={this.handleChange} />
            </label>

            <label>
              Benefits:
              <textarea type="text" id="benefits" onChange={this.handleChange} />
            </label>

            <label>
              Company Description:
              <textarea type="text" id="companyDescription" onChange={this.handleChange} />
            </label>

            <label htmlFor="city">
              City:
              <input type="text" id="city" name="city" onChange={this.handleChange} />
            </label>

            <label htmlFor="zipcode">
              Zipcode:
              <input type="text" id="zipcode" name="zipcode" onChange={this.handleChange} />
            </label>

            <label>Location Type:</label>
            <select id="workLocationType" onChange={this.handleChange}>
              <option selectde value="onsite">Onsite</option>
              <option value="remote">Remote</option>
              <option value="mixed">Mixed</option>
            </select>
            <Button type="submit" value="PostJob">POST JOB</Button>
          </Form>
        </Options>
      </Wrapper>,
      document.getElementById('modal-root') || document.createElement('div'), // for testing purposes
    );
  }
}

export default PostJobModal;
