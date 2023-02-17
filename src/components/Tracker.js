
import AddTransaction from './AddTransaction';
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