import { useState } from 'react';
import './Filter.css';

const ExpensesFilter = (props) => {

    const [enteredFilter, setEnteredFilter] = useState(2022);

    const filterChangeHandler = (event) => {
        setEnteredFilter(event.target.value);
        props.onFilterChoice(enteredFilter);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={filterChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;