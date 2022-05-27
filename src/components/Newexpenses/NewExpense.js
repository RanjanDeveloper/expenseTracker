import React, {useState, useId} from 'react'
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'

const NewExpense = (props) => {
  const id1=useId()
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }
 const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id : id1
    }
    props.onAddExpense(expenseData)
 }
  return (
    <div className='new-expense'>
      {
        !isEditing && 
        <button onClick={startEditingHandler}>Add New Expense</button>
      }
      {
        isEditing &&
        <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
      }
        
    </div>
  )
}

export default NewExpense