import React, { useState } from 'react';
import styled from 'styled-components';
import NameInput from './inputLibrary/NameInput';
import EmailInput from './inputLibrary/EmailInput';
import MobileInput from './inputLibrary/MobileInput';

const StyledFormContainer = styled.div`
  width: 100%;
  margin: 1em auto;
  padding: 3em 0;

  form {
    display: flex;
    flex-direction: column;
    gap: 2em;
    justify-content: center;
    align-items: center;
  }

  h3 {
    color: var(--main-bg-color);
  }

  label {
    color: var(--element-bg-color);
    font-weight: bold;
  }

  input {
    background-color: var(--element-bg-color);
    color: var(--accent-color);
    font-size: 2rem;
    width: 100%;
  }
`;

// markup
const UserForm = ({ getNewUser }) => {
  //  State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Events
  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value.toLowerCase());
  };

  const mobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  // Submits

  const formSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      mobile: mobileNumber,
      id: Math.random().toString(),
    };

    getNewUser(newUser);

    setName('');
    setEmail('');
    setMobileNumber('');
  };

  // Markup
  return (
    <StyledFormContainer>
      <h3>Registration Form</h3>
      <form onSubmit={formSubmit}>
        <NameInput name={name} onNameChange={nameChange} />
        <EmailInput email={email} onEmailChange={emailChange} />
        <MobileInput
          mobile={mobileNumber}
          onMobileChange={mobileNumberChange}
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </StyledFormContainer>
  );
};

export default UserForm;
