// markup
import Header from './Header';

const AppLayout = ({ children }) => (
  <main className="App">
    <Header title="Expensify" />
    {children}
  </main>
);

export default AppLayout;
