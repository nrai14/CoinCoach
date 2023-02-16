
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';



function ContactForm() {
    return (
        <>
           

        <form>

          <Grid container spacing={1} justifyContent="center" padding={10}>
          <Grid item xs> 
          <TextField id='' label='Full Name' Placeholder='Enter full name' variant='outlined' fullWidth />
          </Grid>

          <Grid item xs> 
          <TextField type='email' id='' label='Email' Placeholder='Enter email' variant='outlined' fullWidth required />
          </Grid>

          <Grid item xs> 
          <TextField id='' label='Message' multiline rows={4} Placeholder='Please type your message here' variant='outlined' fullWidth required />
          </Grid>

          </Grid>

        </form>


        </>
    )
};

export default ContactForm;