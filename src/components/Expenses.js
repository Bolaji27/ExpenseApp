import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2020);
  const filterDropChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() ===filteredYear;
  })
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterDropChange}
      />
      <ExpensesChart expenses ={filteredExpenses}/>
      <ExpensesList items = {filteredExpenses}/>

    </div>
  );
}

export default Expenses;
