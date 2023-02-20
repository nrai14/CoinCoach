
import InitPots from '../components/InitPots';
import AddTransaction from '../components/AddTransaction';
import RenderPots from '../components/RenderPots'
import CurrencyConverter from '../components/CurrencyConverter';



import Typography from '@mui/material/Typography';
import RenderTransactions from '../components/RenderTransactions';
import RenderCards from '../components/RenderCards';
import RenderIncome from '../components/RenderIncome';
import RenderFiveTransactions from '../components/RenderFiveTransactions';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Tracker() {

  return (
    <>
      
      <InitPots />



      <Box sx={{ bgcolor: ' #eaf6f9', border: 2, borderColor: '#F7F7F7', borderRadius: 3, maxWidth: '70%', margin: "0 auto" }}>
        <Typography variant='h3' align='center'>Money Tracker</Typography>
        <Grid container spacing={2} justifyContent="center" >
          <Grid item xs={12} display ="flex" justifyContent="center" alignItems="center">
            <RenderCards />
          </Grid>

          <Grid item xs={5} >
            <AddTransaction />
          </Grid>
          <Grid item xs={7} >
            <RenderTransactions />
          </Grid>
          <Grid item xs={6} >
            <RenderIncome />
          </Grid>
          <Grid item xs={6} >
            <RenderFiveTransactions />
          </Grid>

          <Grid item xs={12}  >
            <RenderPots />

            <CurrencyConverter/>
          </Grid>
         
        </Grid>

      </Box>

    </>
  );
}

export default Tracker;