
//Containers
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function Tracker() {
    return (
      <>
    
    <Grid container spacing={4} justifyContent="center" padding={10}>
          <Grid item xs>
          <Paper style ={{height: 400, width:'100%',}} />
          </Grid>
          <Grid item xs>
          <Paper style ={{height: 400, width:'100%',}} />
          </Grid>
          <Grid item xs>
          <Paper style ={{height: 400, width:'100%',}} />
          </Grid>
        </Grid>
     
      </>
    );
  }
  
  export default Tracker;