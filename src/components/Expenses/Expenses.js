import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';


function Expenses(props) {
  const [filteredYear, setFilteredFilter] = useState('2020');


  const filterChangeHandler = selectedYear => {
    setFilteredFilter(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;