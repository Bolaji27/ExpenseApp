import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm";
function NewExpense(props) {
   const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    props.onPassData(expenseData)
    setShowNewExpense(false);
   }
 
  const [showNewExpense, setShowNewExpense] = useState(false);
  const showNewExpenseHandler = () => {
    setShowNewExpense(true);
  };
  const cancelExpenseEditing =()=> {
    setShowNewExpense(false)
  }
 

 

  return (

    <div className="new-expense">
        {!showNewExpense && (
        <button className='btn-exp' type="button" onClick={showNewExpenseHandler}>
          Add New Expense
        </button>
      )}
    {showNewExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={cancelExpenseEditing}/>}
    

      
    </div>
  );
}
export default NewExpense;
