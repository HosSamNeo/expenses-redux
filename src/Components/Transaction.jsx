import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../Redux/expensesSlice';
import {v4 as uuid} from 'uuid';



const Transaction = () => {
  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [amount,setAmount] = useState('');
  
 
  return (
    <>
        <h3>Add new transaction</h3>
        <div>
            <div className="form-control">
            <label htmlFor="name" >name</label>
            <input value={name} required onChange={e => setName(e.target.value)} name='name' type="text" placeholder="Enter Transaction name..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
            <input value={amount} required onChange={e => setAmount(e.target.value)} name='amount' type="number" placeholder="Enter amount..." />
            </div>
            <button onClick={() => {
                dispatch(addTransaction({id:uuid(),name:name,amount:+amount}));
                setName('');
                setAmount('');
            }} className="btn">Add transaction</button>
        </div>
    </>
  )
}

export default Transaction;