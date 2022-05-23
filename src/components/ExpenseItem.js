import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
        <div>16 Mar 2022</div>
        <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">$297.67</div>
        </div>
    </div>
  )
}

export default ExpenseItem