import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // INDIVIDUAL STATE VALUES. OPTION 1
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // STATE OBJECT FOR MULTIPLE STATES AT A TIME. OPTIONS 2 AND 3
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // DYNAMIC SINGLE FUNCTION FOR CHANGING ANY STATE VARIABLE. OPTION 3
    // const inputChangeHandler = (identifier, value) => {
    //     if(identifier === 'title'){
    //         setEnteredTitle(value);
    //     }else if(identifier === 'date'){
    //         setEnteredDate(value);
    //     }else{
    //         setEnteredAmount(value);
    //     }
    // };

    // INDIVIDUAL STATE CHANGE HANDLER FOR ONE AT A TIME. OPTION 1
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // ONE WAY TO CHANGE INDIVIDUAL STATE VALUE WHEN WORKING WITH OBJECT STATE WITH MULTIPLE AND RETAINING ORIGINAL VALUES NOT TOUCHED, SCHEDULES THE CHANGE (NOT IMMEDIATE). OPTION 2 AND 3
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // use when state update depends on previous state to ensure it does not get scheduled but rather ran immediately. *******************
        // SECOND WAY TO CHANGE INDIVIDUAL STATE VALUE WHEN WORKING WITH OBJECT STATE WITH MULTIPLE AND RETAINING ORIGINAL VALUES NOT TOUCHED, DOES IT IMMEDIETLY DUE TO FUNCTION CALL. OPTION 2 AND 3
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, enteredTitle: event.target.value
        //     };
        // })
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // OPTION 2 AND 3
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // OPTION 2 AND 3
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                    {/* OPTION 3, FOR CALLING A REUSABLE STATE MANAGAMENT OBJECT FUNCTION */}
                    {/* <input type='text' onChange={(event) => inputChangeHandler(event.target.value, 'title')} /> */}
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                    {/* OPTION 3, FOR CALLING A REUSABLE STATE MANAGAMENT OBJECT FUNCTION */}
                    {/* <input type='number' min='0.01' step='0.01' onChange={(event) => inputChangeHandler(event.target.value, 'amount')} /> */}
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                    {/* OPTION 3, FOR CALLING A REUSABLE STATE MANAGAMENT OBJECT FUNCTION */}
                    {/* <input type='date' min='2019-01-01' max='2022-12-31' onChange={(event) => inputChangeHandler(event.target.value, 'date')} /> */}
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;