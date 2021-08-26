import React from 'react';

// markup
const NameInput = ({ name, onNameChange }) => (
  <label htmlFor="name">
    Name:
    <input type="text" id="name" value={name} onChange={onNameChange} />
  </label>
);

export default NameInput;
