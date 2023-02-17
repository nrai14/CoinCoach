import {useState} from 'react';

function InitPots() {

    const [pots, setPots] = useState([]);
    const newPots = [

        {
            category: 'Bills',
            value: '0'
        },
        {
            category: 'Charity',
            value: '0'
        },
        {
            category: 'Eating Out',
            value: '0'
        },
        {
            category: 'Entertainment',
            value: '0'
        },
        {
            category: 'Expenses',
            value: '0'
        },
        {
            category: 'Groceries',
            value: '0'
        },
        {
            category: 'Holidays',
            value: '0'
        },
        {
            category: 'Income',
            value: '0'
        },
        {
            category: 'Savings',
            value: '0'
        },
        {
            category: 'Shopping',
            value: '0'
        },
        {
            category: 'Transport',
            value: '0'
        },

    ]

    setTransactions(newPots);
    localStorage.setItem('transactions', JSON.stringify(pots));

}





