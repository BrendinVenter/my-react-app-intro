/* eslint-disable */

import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

// markup
const Expenses = ({ expenseData, filterSelectionValue }) => {
  const handleFilterSelection = (filterSelection) => {
    console.log('Expenses.js', filterSelection);
    filterSelectionValue(filterSelection);
  };

  let expenseContent =
    expenseData.length > 0 ? (
      expenseData.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))
    ) : (
      <p>No expenses found.</p>
    );

  return (
    <div>
      <ExpensesFilter filterSelection={handleFilterSelection} />
      <div>{expenseContent}</div>
    </div>
  );
};

export default Expenses;
