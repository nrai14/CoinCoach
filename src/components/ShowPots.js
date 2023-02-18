//import {useEffect} from 'react';

import Typography from '@mui/material/Typography';



// useEffect(() => {});

function ShowPots() {

 
const currentTransactions = JSON.parse(localStorage.getItem('transactions'));
 const currentPots = JSON.parse(localStorage.getItem('pots'));



    return (
        <>
            
            <Typography variant='h2' align='center'>ShowPots</Typography>

            
      {currentPots.map((pot, index) => (
        <div key={index} > 
            <h5 >{pot.category}</h5>
            <p >{pot.value}</p>  
        </div>
      ))}

{currentTransactions.map((transaction, index) => (
        <div key={index} > 
        <h5 >{transaction.date}</h5>
            <h5 >{transaction.category}</h5>
            <h5 >{transaction.description}</h5>
            <p >{transaction.value}</p>  
        </div>
      ))}


            
           
        </>
    )
};

export default ShowPots;