import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  margin: -8px;
  padding-top: 24px;
  padding-left: 36px;
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
  border: 4px solid grey;
  border-radius: 8px;
  float: left;
`;
const Form = styled.form`
  height: 70%;
  width: 30%;
  min-width: 256px;
  max-width: 320px;
  margin: auto;
  padding: 36px;
  border: 4px solid grey;
  border-radius: 8px;
  position: relative;
  float: right;
  text-align: center;
  background: white;
`;
const Input = styled.input`
  height: 36px;
  width: 90%;
  border: 2px solid grey;
  border-radius: 8px;
`;
const Label = styled.label`
  float: left;
  margin: 25px 25px 5px 25px;
`;
const Button = styled.button`
  height: 36px;
  width: 90%;
  border: 2px solid grey;
  border-radius: 8px;
`;

const FrontPage = () => {
  const [user, setUser] = useState('seeker');
  const [formType, setFormType] = useState('Register');

  return (
    <FlexDiv>
      <Div>
        <h1>JobSite</h1>
        <h3>Connecting people with jobs and jobs with people</h3>
      </Div>
      <Form>
        <h2>{formType}</h2>
        <h4>Looking for a job? Sign up now!</h4>
        <Label htmlFor="firstName">{'First Name: '}</Label>
        <Input type="text" id="firstName" />
        <Label htmlFor="lastName">{'Last Name: '}</Label>
        <Input type="text" id="lastName" />
        <Label htmlFor="email">{'Email: '}</Label>
        <Input type="email" id="email" />
        <Label htmlFor="password">{'Password: '}</Label>
        <Input type="password" id="password" />

      </Form>
    </FlexDiv>
  );
};

export default FrontPage;
