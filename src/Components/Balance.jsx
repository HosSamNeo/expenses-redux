import React from "react";
import { useSelector } from 'react-redux';

const Balance = () => {

  const expenses = useSelector((state) => state.expenses.expenses);
  const amounts  = expenses.map(transaction => transaction.amount);
  const total = amounts.reduce((acc,item) => (acc += item) , 0).toFixed(2);
  return (

    <>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
    </>
  )
}

export default Balance