import React from 'react';
import { useSelector } from 'react-redux';

const IncomeExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const amounts  = expenses.map(transaction => transaction.amount);
  const incomeBalance = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

const expenseBalance = (
  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
  -1
).toFixed(2);


  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+${incomeBalance}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">-${expenseBalance}</p>
    </div>
  </div>
  )
}

export default IncomeExpenses;