import '../styles/ExpenseItem.css';
import ItemContainer from './ItemContainer';

// markup
const Total = ({ expenses, currency }) => {
  const expenseTotal = expenses.reduce(
    (sum, expense) => sum + expense.amount.amount,
    0
  );

  return (
    <ItemContainer>
      <h3>Total</h3>
      <div className="expense-amount">
        <span>{currency}</span>
        <span>{expenseTotal.toString()}</span>
      </div>
    </ItemContainer>
  );
};

export default Total;
