import React from 'react';

// markup
const MobileInput = ({ mobile, onMobileChange }) => (
  <label htmlFor="mobile-number">
    Mobile:
    <input
      type="tel"
      id="mobile-number"
      value={mobile}
      onChange={onMobileChange}
    />
  </label>
);

export default MobileInput;
