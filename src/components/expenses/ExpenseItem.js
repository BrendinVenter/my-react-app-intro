import '../../styles/ExpenseItem.css';
import moment from 'moment';
import ItemContainer from '../ui/ItemContainer';

// markup
const ExpenseItem = ({ expense }) => {
  //  State
  // const [title, setTitle] = useState(expense.description.title);
  // const [tempString, setTempString] = useState('');
  // console.log(tempString);

  //  Data
  const year = moment(expense.date).format('YYYY').slice(0, 4).toUpperCase();
  const month = moment(expense.date).format('MMMM').slice(0, 3).toUpperCase();
  const day = moment(expense.date).format('DD').slice(0, 3).toUpperCase();

  // // Functions
  // const clickHandler = () => {
  //   setTitle(tempString);
  // };
  //
  // const handleChange = (e) => {
  //   setTempString(e.target.value);
  // };
  //
  // const handleSubmit = () => {
  //   setTitle(tempString);
  // };

  // Markup
  return (
    <ItemContainer>
      <div className="expense-date">
        <span>{day}</span>
        <span>{month}</span>
        <span>{year}</span>
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
