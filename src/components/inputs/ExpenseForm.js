import React from 'react';
import GeneralForm from './GeneralForm';

// markup
const ExpenseForm = ({ onAddExpenseData }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpenseData(expenseData);
  };

  return (
    <div className="expense-form-container">
      <div>
        <h2>Add New Expense</h2>
      </div>
      <GeneralForm onSaveNewExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default ExpenseForm;
