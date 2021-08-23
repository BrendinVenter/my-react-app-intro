import './styles/App.css';
import ExpenseItem from './components/expenses/ExpenseItem';
import Total from './components/expenses/Total';
import AppLayout from './components/ui/AppLayout';
import ExpenseForm from './components/inputs/ExpenseForm';

// Data
const expenses = [
  {
    id: 1,
    date: '2021-07-26',
    description: {
      title: 'Online Course',
      description: 'Bought an online course to learn React.',
    },
    amount: {
      currency: '$',
      amount: 34.95,
    },
  },
  {
    id: 2,
    date: '20200817',
    description: {
      title: 'Groceries',
      description: "Spinney's weekly supermarket shop.",
    },
    amount: {
      currency: '$',
      amount: 218.67,
    },
  },
  {
    id: 3,
    date: '20200822',
    description: {
      title: 'Collagen Protein',
      description: 'My monthly serving of protein powder.',
    },
    amount: {
      currency: '$',
      amount: 56.87,
    },
  },
];

// Markup
function App() {
  return (
    <AppLayout className="App">
      <ExpenseForm />
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
      <Total expenses={expenses} currency={expenses[0].amount.currency} />
    </AppLayout>
  );
}

export default App;
