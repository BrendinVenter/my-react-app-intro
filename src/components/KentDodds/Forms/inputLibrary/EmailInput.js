import React from 'react';

// markup
const EmailInput = ({ email, onEmailChange }) => (
  <label htmlFor="email">
    Email:
    <input type="email" id="email" value={email} onChange={onEmailChange} />
  </label>
);

export default EmailInput;
