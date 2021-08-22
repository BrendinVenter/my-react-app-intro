import React from 'react';
import '../styles/ExpenseItem.css';

// markup
const Total = ({ expenses, currency }) => {
  const expenseTotal = expenses.reduce(
    (sum, expense) => sum + expense.amount.amount,
    0
  );

  return (
    <div className="expense-container">
      <h3>Total</h3>
      <div className="expense-amount">
        <span>{currency}</span>
        <span>{expenseTotal.toString()}</span>
      </div>
    </div>
  );
};

export default Total;
