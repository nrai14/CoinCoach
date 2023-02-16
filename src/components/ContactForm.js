
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function ContactForm() {
  return (
    <>
      <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }} >
        <CardContent>
          <form>
            <Grid container spacing={4} justifyContent="center" padding={10}>
              <Grid item xs={12}>
                <TextField id='' label='Full Name' Placeholder='Enter full name' variant='outlined' fullWidth />
              </Grid>

              <Grid item xs={12}>
                <TextField type='email' id='' label='Email' Placeholder='Enter email' variant='outlined' fullWidth required />
              </Grid>

              <Grid item xs={12}>
                <TextField id='' label='Message' multiline rows={4} Placeholder='Please type your message here' variant='outlined' fullWidth required />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant='contained' fullWidth> Submit </Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>

    </>
  )
};

export default ContactForm;