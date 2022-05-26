import React , {useState} from 'react'
import './NewExpenseForm.css'

const NewExpenseForm = (props) => {
   const[enteredTitle, setEnteredTitle] = useState('')
   const[enteredAmount, setEnteredAmount] = useState('')
   const[enteredDate, setEnteredDate] = useState('')

//    const[userInput, setUserInput] = useState({
//        enteredTitle :'',
//        enteredAmount :'',
//        enteredDate :''
//    })

   const titleChangeHandler = (eve) =>{
        setEnteredTitle(eve.target.value)

        // setUserInput ({
        //     ...userInput,
        //     enteredTitle :eve.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle : eve.target.value}
        // })
   }

   const amountChangeHandler = (eve) =>{
    setEnteredAmount(eve.target.value)

    // setUserInput ({
    //     ...userInput,
    //     enteredAmount :eve.target.value
    // })

    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount : eve.target.value}
    // })
   }

    const dateChangeHandler = (eve) =>{
        setEnteredDate(eve.target.value)

        // setUserInput ({
        //     ...userInput,
        //     enteredDate :eve.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate : eve.target.value}
        // })     
   }

   const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
   };

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount}  min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
    </form>
  )
}

export default NewExpenseForm