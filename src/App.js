import { useState } from 'react';
import './styles/App.css';
import Total from './components/expenses/Total';
import AppLayout from './components/ui/AppLayout';
import ExpenseForm from './components/inputs/ExpenseForm';
import Expenses from './components/expenses/Expenses';

// Data
// const expenses = [
//   {
//     id: Math.random().toString(),
//     date: '2021-07-26',
//     description: {
//       title: 'Online Course',
//       description: 'Bought an online course to learn React.',
//     },
//     amount: {
//       currency: '$',
//       amount: 34.95,
//     },
//   },
//   {
//     id: Math.random().toString(),
//     date: '20200817',
//     description: {
//       title: 'Groceries',
//       description: "Spinney's weekly supermarket shop.",
//     },
//     amount: {
//       currency: '$',
//       amount: 218.67,
//     },
//   },
//   {
//     id: Math.random().toString(),
//     date: '20200822',
//     description: {
//       title: 'Collagen Protein',
//       description: 'My monthly serving of protein powder.',
//     },
//     amount: {
//       currency: '$',
//       amount: 56.87,
//     },
//   },
// ];

// Markup
function App() {
  // state
  const [expenseData, setExpenseData] = useState([]);

  console.log(expenseData);

  // eslint-disable-next-line no-unused-vars
  const [filterSelection, setFilterSelection] = useState('');

  // Expense Data
  const addExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseObj = {
      ...enteredExpenseData,
    };
    setExpenseData(expenseData.concat(newExpenseObj));
  };

  // Filter
  const handleFilterSelection = (filterValue) => {
    console.log('App.js', filterValue);
    setFilterSelection(filterValue);
  };

  // Reset Data
  const handleResetData = () => {
    setExpenseData([]);
  };

  // Markup
  return (
    <AppLayout className="App">
      <ExpenseForm onAddExpenseData={addExpenseDataHandler} />
      <Expenses
        expenseData={expenseData}
        filterSelectionValue={handleFilterSelection}
      />
      <Total total={0} onClickHandler={handleResetData} />
    </AppLayout>
  );
}

export default App;
