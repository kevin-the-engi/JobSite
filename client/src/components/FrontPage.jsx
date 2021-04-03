import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  padding: 24px;
  border-radius: 8px;
  float: left;
`;
const Form = styled.form`
  height: 65%;
  width: 35%;
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
  margin: 25px 25px 5px 25px;
`;
const Button = styled.button`
  height: 40px;
  width: 55%;
  margin: 45px auto;
  border: 1px solid grey;
  border-radius: 25px;
  background: white;
`;
const BottomDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 80%;
  margin: auto auto 45px auto;
  text-align: center;
`;

const FrontPage = () => {
  const [user, setUser] = useState('seeker');
  const [formType, setFormType] = useState('Register');

  const formToggle = () => {
    if (formType === 'Register') {
      setFormType('Login');
    } else {
      setFormType('Register');
    }
  };

  return (
    <FlexDiv>
      <Div>
        <h1>JobSite</h1>
        <h3>Connecting people with jobs and jobs with people</h3>
      </Div>
      <Form>
        <h2>{formType}</h2>
        <h4>Looking for a job? Sign up now!</h4>
        {
          formType === 'Register' ? (
            <>
              <Label htmlFor="firstName">{'First Name: '}</Label>
              <Input type="text" id="firstName" />
              <Label htmlFor="lastName">{'Last Name: '}</Label>
              <Input type="text" id="lastName" />
            </>
          ) : (
            <>
              <br />
              <br />
            </>
          )
        }
        <Label htmlFor="email">{'Email: '}</Label>
        <Input type="email" id="email" />
        <Label htmlFor="password">{'Password: '}</Label>
        <Input type="password" id="password" />
        <br />
        <Button type="submit">{formType}</Button>
        {
          formType === 'Register'
            ? (
              <BottomDiv>
                {'Already a user? '}
                <a href="#app" onClick={formToggle}>Sign in</a>
              </BottomDiv>
            )
            : (
              <BottomDiv>
                {'Not yet a user? '}
                <a href="#app" onClick={formToggle}>Register</a>
              </BottomDiv>
            )
        }
      </Form>
    </FlexDiv>
  );
};

export default FrontPage;
