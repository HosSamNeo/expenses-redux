import { configureStore } from '@reduxjs/toolkit';
import ExpensesReducer from './expensesSlice';
export const Store = configureStore({
    reducer:{
        expenses:ExpensesReducer,
    },
})

