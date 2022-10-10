import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { deleteTransaction } from '../Redux/expensesSlice';

const TransactionList = () => {
    const {expenses} = useSelector((state) => state.expenses);
    const dispatch = useDispatch();
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    expenses.map((trans) => (
                    <li key={trans.id} className={trans.amount > 0 ? 'plus' : 'minus'}>
                        {trans.name} <span>${trans.amount}</span><button onClick={() => dispatch(deleteTransaction({id:trans.id}))} className="delete-btn">x</button>
                    </li>  
                    ))
                }
            </ul>
        </>
    )
}

export default TransactionList