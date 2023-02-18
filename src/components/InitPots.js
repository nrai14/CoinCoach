import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';

function InitPots() {

    
    const [pots, setPots] = useState([]);


    useEffect(() => {
  
    //If there are pots on the Local storage already do not create again
    const existingPots = JSON.parse(localStorage.getItem('pots'));
   
    if (existingPots===null) {
        const newPots = [
            {
                id: 0,
                category: 'Bills',
                value: 0
            },
            {
                id: 1,
                category: 'Charity',
                value: 0
            },
            {
                id: 2,
                category: 'Eating Out',
                value: 0
            },
            {
                id: 3,
                category: 'Entertainment',
                value: 0
            },
            {
                id: 4,
                category: 'Expenses',
                value: 0
            },
            {
                id: 5,
                category: 'Groceries',
                value: 0
            },
            {
                id: 6,
                category: 'Holidays',
                value: 0
            },
            {
                id: 7,
                category: 'Income',
                value: 0
            },
            {
                id: 8,
                category: 'Savings',
                value: 0
            },
            {
                id: 9,
                category: 'Shopping',
                value: 0
            },
            {
                id: 10,
                category: 'Transport',
                value: 0
            },
            {
                id: 11,
                category: 'Balance',
                value: 0
            }
    
        ];
        setPots(newPots);
        localStorage.setItem('pots', JSON.stringify(newPots));
         
    }
   
    });


    return(    
    <>
    <Typography variant='h2' align='center'>Pots</Typography>
    </>
    );
}

export default InitPots;




