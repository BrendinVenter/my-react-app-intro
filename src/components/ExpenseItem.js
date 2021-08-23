import '../styles/ExpenseItem.css';
import moment from 'moment';
import ItemContainer from './ItemContainer';

// markup
const ExpenseItem = ({ expense }) => {
  const month = moment(expense.date).format('MMMM').slice(0, 3).toUpperCase();
  const day = moment(expense.date).format('DD').slice(0, 3).toUpperCase();

  return (
    <ItemContainer>
      <div className="expense-date">
        <span>{day}</span>
        <span>{month}</span>
      </div>
      <div className="expense-description-container">
        <h3 className="expense-title">{expense.description.title}</h3>
        <p className="expense-description">{expense.description.description}</p>
      </div>
      <div className="expense-amount">
        <span>{expense.amount.currency}</span>
        <span>{expense.amount.amount}</span>
      </div>
    </ItemContainer>
  );
};

export default ExpenseItem;
