import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FlexDiv = styled.div`
  font-family: Arial;
  display: flex;
  margin: 0;
  height: 94vh;
  width: 100vw;
  justify-content: center;
  flex-wrap: wrap;
  overflow-x: hidden;
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

const ToggleButtonDiv = styled.div`
  height: 6vh;
  width: 10vw;
  position: absolute;
  top: 0;
  right: 5vw;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Toggle = styled.button`
  position: relative;
  text-align: center;
  height: 4vh;
  line-height: 4vh;
  width: 9vw;
  border: 1px solid grey;
  border-radius: 25px;
  text-decoration: none;
  color: #424242;
  background: rgba(255,255,255,0.4);
`;

const URL = 'http://3.134.101.103:4000/api';
const APP_TITLE = 'JobSite';
const SLOGAN = 'Connecting people with jobs and jobs with people';
const SEEKER_REGISTER_HEADER = 'Looking for a job? Sign up now!';
const EMPLOYER_REGISTER_HEADER = 'Looking for applicants? Sign up now!';
const SEEKER_LOGIN_HEADER = 'Login to get back to your search!';
const EMPLOYER_LOGIN_HEADER = 'Login to get access to your applicants!';
const REGISTER_BOTTOM_TEXT = 'Already a user? ';
const LOGIN_BOTTOM_TEXT = 'Don\'t have an account yet? ';

const FrontPage = ({ setUserID, setAccountType }) => {
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
    // if (user === 'Seeker') {
    //   window.location.href = `${window.location.origin}/#/seeker`;
    // } else {
    //   window.location.href = `${window.location.origin}/#/employer`;
    // }

    // TODO validate form data before post request

    if (formType === 'Register') {
      if (user === 'Seeker') {
        axios.post(`${URL}/users`, {
          firstName,
          lastName,
          email,
          password,
        })
          .then(({ data }) => {
            const { accessToken, _id } = data.data;
            setUserID(_id);
            setAccountType('User');
            // Do something with accessToken
          });
      } else {
        axios.post(`${URL}/employers`, {
          company,
          firstName,
          lastName,
          email,
          password,
        })
          .then(({ data }) => {
            const { accessToken, _id } = data.data;
            setUserID(_id);
            setAccountType('Employer');
            // Do something with accessToken
          });
      }
    } else {
      axios.post(`${URL}/auth`, {
        email,
        password,
      })
        .then(({ data }) => {
          const { accessToken, _id, accountType } = data.data;
          setUserID(_id);
          setAccountType(accountType);
          // Do something with accessToken
        });
    }
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
      <ToggleButtonDiv>
        <Toggle onClick={handleUserToggle}>{`${user === 'Seeker' ? 'Employer' : 'Seeker'} Portal`}</Toggle>
      </ToggleButtonDiv>
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
