
import InitPots from '../components/InitPots';
import AddTransaction from '../components/AddTransaction';
import RenderTotalExpenses from '../components/RenderTotalExpenses'

import Typography from '@mui/material/Typography';
import RenderTransactions from '../components/RenderTransactions';
import RenderCards from '../components/RenderCards';
import RenderIncome from '../components/RenderIncome';
import RenderFiveTransactions from '../components/RenderFiveTransactions';
import RenderTopFive from '../components/RenderTopFive';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';




function Tracker() {

  return (
    <>
      
      <InitPots />

    


      <Box  pb={10} pr={5} pl={5} sx={{  bgcolor: ' #c7d8e1', border: 2, borderColor: '#F7F7F7', borderRadius: 3, maxWidth: '70%', margin: "0 auto" }}>
        
        <Typography variant='h3' align='center' sx={{p:5}}>Coins Tracker</Typography>
       
        <Grid container spacing={1} justifyContent="center" >
          
          <Grid item xs={7}>
            <RenderCards /> 
            
          </Grid>

          <Grid item xs={5} > 
            <RenderTopFive/>
          </Grid>

          <Grid item xs={5} >
            <AddTransaction />
          </Grid>
          <Grid item xs={7} >
            <RenderTransactions />
          </Grid>
         
          
          <Grid item xs={12} >
            <RenderIncome />
          </Grid>

          <Grid item xs={12} >
            <RenderFiveTransactions />
          </Grid>

          <Grid item xs={12}  >
            <RenderTotalExpenses />
            {/* <CurrencyConverter/> */}
          </Grid>

          
        </Grid>

      </Box>

    </>
  );
}

export default Tracker;