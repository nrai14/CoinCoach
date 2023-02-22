
import InitPots from '../components/InitPots';
import AddTransaction from '../components/AddTransaction';
import RenderTotalExpenses from '../components/RenderTotalExpenses'
import RenderTransactions from '../components/RenderTransactions';
import RenderCards from '../components/RenderCards';
import RenderIncome from '../components/RenderIncome';
import RenderFiveTransactions from '../components/RenderFiveTransactions';
import RenderTopFive from '../components/RenderTopFive';
import ResponsiveRenderFiveTransactions from '../components/ResponsiveRenderFiveTransactions'
import ResponsiveRenderIncome from '../components/ResponsiveRenderIncome'


import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Tracker() {

  return (
    <>
      <InitPots />

      <Typography
        variant='h3'
        align='center'
        sx={{ p: 5 }}>
        Coins Tracker
      </Typography>

      <Grid container spacing={1} justifyContent="center" pb={10}
        pr={5}
        pl={5}  >

        <Grid item xs={12} sm={7}>
          <RenderCards />
        </Grid>

        <Grid item xs={12} sm={5} >
          <RenderTopFive />
        </Grid>

        <Grid item xs={12} sm={6} >
          <AddTransaction />
        </Grid>

        <Grid item xs={12} sm={6}
          display={{ xs: "none", sm: "block" }}
        >
          <RenderTransactions />
        </Grid>

        {/* A different version of the component will show depending of the screen size in use */}
        <Grid item sm={6}
          display={{ xs: "none", sm: "block" }}>
          <RenderIncome />
        </Grid>

        <Grid item xs={12}
          display={{ xs: "block", sm: "none" }}>
          <ResponsiveRenderIncome />
        </Grid>

        {/* A different version of the component will show depending of the screen size in use */}
        <Grid item sm={6}
          display={{ xs: "none", sm: "block" }} >
          <RenderFiveTransactions />
        </Grid>

        <Grid item xs={12}
          display={{ xs: "block", sm: "none" }}>
          <ResponsiveRenderFiveTransactions />
        </Grid>

        {/* Render Total Expenses will hide on xs */}
        <Grid item xs={12}
          display={{ xs: "none", sm: "block" }}>
          <RenderTotalExpenses />
        </Grid>

        <Grid item xs={12}
          display={{ xs: "block", sm: "none" }}>
          <Typography
            variant='h5'
            align='center'
            sx={{ p: 5 }}>
            Use desktop version to see Transactions History , Total Expenses and full version of data .
          </Typography>
        </Grid>

      </Grid>

    </>
  );
}
export default Tracker;