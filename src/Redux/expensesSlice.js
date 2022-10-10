import {createSlice} from '@reduxjs/toolkit';
export const expensesSlice = createSlice({
    name:'expenses',
    initialState : {
        expenses:[],
    },
    reducers:{
        addTransaction:(state,action) => {
            state.expenses.push(action.payload);
        },
        deleteTransaction:(state,action) => {
            state.expenses = state.expenses.filter(expense => expense.id !== action.payload.id)
        }
    }
})


export const {addTransaction ,deleteTransaction} = expensesSlice.actions;

let ExpensesReducer = expensesSlice.reducer;
export default ExpensesReducer;

