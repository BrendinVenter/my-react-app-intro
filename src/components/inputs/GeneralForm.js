import React, { useState } from 'react';
import '../../styles/Forms.css';

// markup
const GeneralForm = ({ onSaveNewExpenseData }) => {
  const [titleInput, setTitleInput] = useState('');

  const [amountInput, setAmountInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const titleHandleChange = (e) => {
    setTitleInput(e.target.value);
  };

  const amountHandleChange = (e) => {
    setAmountInput(e.target.value);
  };
  const dateHandleChange = (e) => {
    setDateInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set Export Object
    const expenseData = {
      description: {
        title: titleInput,
      },
      amount: {
        currency: '$',
        amount: amountInput,
      },
      date: dateInput,
    };

    onSaveNewExpenseData(expenseData);

    // Reset
    setTitleInput('');
    setAmountInput('');
    setDateInput('');
  };

  return (
    <form className="expense-form__wrapper" onSubmit={handleSubmit}>
      <div className="form__controls">
        <div className="form__control">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Title</label>
          <input type="text" value={titleInput} onChange={titleHandleChange} />
        </div>

        <div className="form__control">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandleChange}
            value={amountInput}
          />
        </div>
        <div className="form__control">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandleChange}
            value={dateInput}
          />
        </div>
        <div className="form__actions">
          {/* eslint-disable-next-line react/button-has-type */}
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default GeneralForm;
