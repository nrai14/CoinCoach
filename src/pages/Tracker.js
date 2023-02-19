
import InitPots from '../components/InitPots'; 
import AddTransaction from '../components/AddTransaction';

import RenderPots from '../components/RenderPots'


import Typography from '@mui/material/Typography';
import RenderTransactions from '../components/RenderTransactions';
import RenderCards from '../components/RenderCards';



function Tracker() {

  return (
    <>
    <Typography variant='h2' align='center'>Tracker</Typography>
    <InitPots/>
    <AddTransaction/>
    <RenderTransactions/>
    <RenderPots/>
    <RenderCards/>





    </>
  );
}

export default Tracker;