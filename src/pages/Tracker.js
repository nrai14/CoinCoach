
import InitPots from '../components/InitPots'; 
import AddTransaction from '../components/AddTransaction';
import ShowPots from '../components/ShowPots';
import Pie from '../components/Pie'


import Typography from '@mui/material/Typography';



function Tracker() {

  return (
    <>
    <Typography variant='h2' align='center'>Tracker</Typography>
    <InitPots/>
    <AddTransaction/>
    <ShowPots/>
    <Pie/>


    </>
  );
}

export default Tracker;