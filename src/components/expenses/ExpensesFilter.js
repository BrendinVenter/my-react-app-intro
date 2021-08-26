import React from 'react';

import '../../styles/ExpensesFilter.css';

const ExpensesFilter = ({ filterSelection }) => {
  const handleSelection = (e) => {
    console.log('ExpensesFilter.js', e.target.value);
    filterSelection(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Filter by year</label>
        <select onChange={handleSelection}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
