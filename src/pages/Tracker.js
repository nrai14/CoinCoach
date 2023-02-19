
import InitPots from '../components/InitPots'; 
import AddTransaction from '../components/AddTransaction';

import RenderPots from '../components/RenderPots'


import Typography from '@mui/material/Typography';
import RenderTransactions from '../components/RenderTransactions';



function Tracker() {

  return (
    <>
    <Typography variant='h2' align='center'>Tracker</Typography>
    <InitPots/>
    <AddTransaction/>
    <RenderTransactions/>
    <RenderPots/>


    </>
  );
}

export default Tracker;