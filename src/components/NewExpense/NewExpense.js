import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [formVisibility, setFormVisibility] = useState(false)

  const handleForm = () => setFormVisibility(!formVisibility)

  return (
    <div className="new-expense">
      {formVisibility ? (
        <div>
          <div>
            <button onClick={handleForm} >
              Hide Form
            </button>
          </div>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
      ) : (
        <div>
          <button onClick={handleForm} className="btn-show">
            Add New Expense
          </button>
        </div>
      )}
    </div>

    // <div className="new-expense">
    //   <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    // </div>
  );
};

export default NewExpense;
