import { useState } from 'react';
import '../../styles/ExpenseItem.css';
import ItemContainer from '../ui/ItemContainer';

// markup
const Total = ({ expenses, currency }) => {
  //  Functions
  const expenseTotal = expenses.reduce(
    (sum, expense) => sum + expense.amount.amount,
    0
  );

  //  State
  const [total, setTotal] = useState(expenseTotal);

  const clickHandler = () => {
    setTotal(0);
  };

  return (
    <ItemContainer>
      <h3>Total</h3>
      <div className="expense-amount">
        <span>{currency}</span>
        <span>{total.toString()}</span>
      </div>
      <button type="button" onClick={clickHandler}>
        Reset
      </button>
    </ItemContainer>
  );
};

export default Total;
