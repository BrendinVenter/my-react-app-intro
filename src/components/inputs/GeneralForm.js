import React from 'react';
import '../../styles/Forms.css';

// markup
const GeneralForm = () => (
  <form>
    <div className="form__controls">
      <div className="form__control">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="form__control">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Description</label>
        <input type="text" />
      </div>
      <div className="form__control">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" />
      </div>
      <div className="form__control">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Date</label>
        <input type="Date" min="2019-01-01" max="2022-12-31" />
      </div>
    </div>
    <div className="form__actions">
      {/* eslint-disable-next-line react/button-has-type */}
      <button type="submit"> Add Expense</button>
    </div>
  </form>
);

export default GeneralForm;
