
import InitPots from '../components/InitPots';
import AddTransaction from '../components/AddTransaction';
import RenderPots from '../components/RenderPots'



import Typography from '@mui/material/Typography';
import RenderTransactions from '../components/RenderTransactions';
import RenderCards from '../components/RenderCards';


import Grid from '@mui/material/Grid';
import RenderIncome from '../components/RenderIncome';
import RenderFiveTransactions from '../components/RenderFiveTransactions';

function Tracker() {

  return (
    <>
      <Typography variant='h2' align='center'>Money Tracker</Typography>
      <InitPots />
      
      


      <Grid container spacing={2}>
        <Grid item xs={8}>
          <RenderCards />
        </Grid>
      
        <Grid item xs={4}>
          <AddTransaction />
        </Grid>
        <Grid item xs={6}>
        {/* <RenderIncome/> */}
        </Grid>
        <Grid item xs={6}>
        {/* <RenderFiveTransactions/> */}
        </Grid>

        <Grid item xs={7}>
          <RenderPots />
        </Grid>
        <Grid item xs={5}>
          {/* <RenderTransactions /> */}
        </Grid>
      </Grid>



    </>
  );
}

export default Tracker;