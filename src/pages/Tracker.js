
import InitPots from '../components/InitPots'; 
import AddTransaction from '../components/AddTransaction';
import Typography from '@mui/material/Typography';


function Tracker() {

  return (
    <>
    <Typography variant='h2' align='center'>Tracker</Typography>
    <InitPots/>
    <AddTransaction/>


    </>
  );
}

export default Tracker;