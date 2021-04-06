// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// const COLOR_1 = '#223B08';
// const COLOR_2 = '#050802';
// const COLOR_3 = '#BAFA75';
// const COLOR_4 = '#5FA317';
// const COLOR_5 = '#129490';

const FlexDiv = styled.div`
  font-family: Arial;
  display: flex;
  margin: -8px;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  flex-wrap: wrap;
  background: linear-gradient(135deg, #BAFA75, #129490);
`;
const Div = styled.div`
  height: 12%;
  width: 32%;
  min-width: 256px;
  max-width: 400px;
  margin-top: 50vh;
  margin-left: 20vw;
  float: left;
  color: white;
  text-shadow: 1px 1px 4px black;
`;
const Form = styled.form`
  height: 65%;
  width: 35%;
  min-height: 640px;
  min-width: 256px;
  max-width: 320px;
  margin: auto;
  padding: 36px;
  border-radius: 5px;
  position: relative;
  float: right;
  text-align: center;
  background: rgba(255,255,255,0.95);
  box-shadow: 8px 12px 16px #333;
`;
const Input = styled.input`
  height: 36px;
  width: 90%;
  border: 1px solid grey;
  border-radius: 5px;
`;
const Label = styled.label`
  float: left;
  margin: 18px 25px 4px 25px;
`;
const Button = styled.button`
  height: 40px;
  width: 55%;
  margin: 32px auto;
  border: 1px solid grey;
  border-radius: 25px;
  background: white;
`;
const BottomDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 80%;
  margin: auto auto 32px auto;
  text-align: center;
`;
const Toggle = styled.button`
  height: 40px;
  width: 160px;
  margin: 16px 32px;
  border: 1px solid grey;
  border-radius: 25px;
  background: rgba(255,255,255,0.4);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const URL = 'http://localhost:4000/api';
const APP_TITLE = 'JobSite';
const SLOGAN = 'Connecting people with jobs and jobs with people';
const SEEKER_REGISTER_HEADER = 'Looking for a job? Sign up now!';
const EMPLOYER_REGISTER_HEADER = 'Looking for applicants? Sign up now!';
const SEEKER_LOGIN_HEADER = 'Login to get back to your search!';
const EMPLOYER_LOGIN_HEADER = 'Login to get access to your applicants!';
const REGISTER_BOTTOM_TEXT = 'Already a user? ';
const LOGIN_BOTTOM_TEXT = 'Don\'t have an account yet? ';

const FrontPage = () => {
  const [user, setUser] = useState('Seeker');
  const [formType, setFormType] = useState('Register');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formToggle = () => {
    if (formType === 'Register') {
      setFormType('Login');
    } else {
      setFormType('Register');
    }
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'company':
        setCompany(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `${window.location.origin}/#/employer`;
    // TODO validate form data before post request
    // if (formType === 'Register') {
    //   if (user === 'Seeker') {
    //     axios.post(`${URL}/users`, {
    //       firstName,
    //       lastName,
    //       email,
    //       password,
    //     });
    //   } else {
    //     axios.post(`${URL}/employers`, {
    //       company,
    //       firstName,
    //       lastName,
    //       email,
    //       password,
    //     });
    //   }
    // } else {
    //   axios.post(`${URL}/auth`, {
    //     email,
    //     password,
    //   });
    // }
  };

  const handleUserToggle = (e) => {
    e.preventDefault();
    if (user === 'Seeker') {
      setUser('Employer');
    } else {
      setUser('Seeker');
    }
  };

  return (
    <FlexDiv>
      <Toggle onClick={handleUserToggle}>{`${user === 'Seeker' ? 'Employer' : 'Seeker'} Portal`}</Toggle>
      <Div>
        <h1>{APP_TITLE}</h1>
        <h3>{SLOGAN}</h3>
      </Div>
      <Form>
        <h2>{`${formType} as ${user}`}</h2>
        {
        formType === 'Register' ? (
          <>
            {
            user === 'Seeker'
              ? <h4>{SEEKER_REGISTER_HEADER}</h4>
              : <h4>{EMPLOYER_REGISTER_HEADER}</h4>
            }
            {
            user === 'Employer' && (
            <>
              <Label htmlFor="company">{'Company: '}</Label>
              <Input type="text" id="company" onChange={handleChange} />
            </>
            )
            }
            <Label htmlFor="firstName">{'First Name: '}</Label>
            <Input type="text" id="firstName" onChange={handleChange} />
            <Label htmlFor="lastName">{'Last Name: '}</Label>
            <Input type="text" id="lastName" onChange={handleChange} />
          </>
        ) : (
          <>
            {
            user === 'Seeker'
              ? <h4>{SEEKER_LOGIN_HEADER}</h4>
              : <h4>{EMPLOYER_LOGIN_HEADER}</h4>
            }
            <br />
            <br />
          </>
        )
        }
        <Label htmlFor="email">{'Email: '}</Label>
        <Input type="email" id="email" onChange={handleChange} />
        <Label htmlFor="password">{'Password: '}</Label>
        <Input type="password" id="password" onChange={handleChange} />
        <Button onClick={handleSubmit}>{formType}</Button>
        {
        formType === 'Register'
          ? (
            <BottomDiv>
              {REGISTER_BOTTOM_TEXT}
              <a href="#app" onClick={formToggle}>Sign in</a>
            </BottomDiv>
          ) : (
            <BottomDiv>
              {LOGIN_BOTTOM_TEXT}
              <a href="#app" onClick={formToggle}>Register</a>
            </BottomDiv>
          )
        }
      </Form>
    </FlexDiv>
  );
};

export default FrontPage;
