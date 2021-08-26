import '../../styles/ExpenseItem.css';
import ItemContainer from '../ui/ItemContainer';

const Total = ({ total, onClickHandler }) => (
  // markup
  <ItemContainer>
    <h3>Total</h3>
    <div className="expense-amount">
      <span>$</span>
      <span>{total.toString()}</span>
    </div>
    <button type="button" onClick={onClickHandler}>
      Reset
    </button>
  </ItemContainer>
);
export default Total;
