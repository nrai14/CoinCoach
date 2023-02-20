
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useState } from "react";

import { createTheme, ThemeProvider } from '@mui/material/styles';


function ContactForm() {

  const theme = createTheme({
    palette: {
      brand: {
        main: '#001C55',
        contrastText: '#fff',
      },
    },
  });



  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      access_key: 'f418e9dd-e235-40ff-9982-2df8fd1e3766'
  });

  const handleChange = (event) => {
      setFormData({
          ...formData,
          [event.target.name]: event.target.value
      });
  };


  const handleSubmit = (event) => {
      event.preventDefault();
      const data = JSON.stringify(formData);

      fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: data
      })
          .then(res => res.json())
          .then(data => {
              setSuccess(true);
              setFormData({
                  ...formData,
                  name: '',
                  email: '',
                  message: ''
              });
              setTimeout(() => { setSuccess(false) }, 2000);
              console.log(data);
          })
          .catch(error => console.log(error));

  };



  return (
    <>
      <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }} >
        <CardContent>
          <form  onSubmit={handleSubmit}>
            <Grid container spacing={4} justifyContent="center" padding={10}>
              <Grid item xs={12}>
                <TextField id='' 
                label='Name' 
                name='name'
                value={formData.name}
                placeholder='Please enter your name' 
                onChange={handleChange}
                variant='outlined' 
                fullWidth />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                type='email' 
                id='' 
                label='Email' 
                name='email'
                value={formData.email}
                placeholder='Please enter your email address' 
                onChange={handleChange}
                variant='outlined' 
                fullWidth 
                required />
              </Grid>

              <Grid item xs={12}>
                <TextField id='' 
                label='Message' 
                name='message'
                value={formData.message}
                multiline rows={4} 
                placeholder='Please type your message here' 
                onChange={handleChange}
                variant='outlined' 
                fullWidth 
                required />
              </Grid>

              <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <Button type="submit" 
                variant='contained' 
                color= 'brand'
                fullWidth> 
                Submit
                </Button>
                </ThemeProvider>
              </Grid>

              <Grid item xs={12}>
              {success && (<Typography variant='h4' align='center'> Thank you very much for your message!</Typography>) }
              </Grid>

            </Grid>



          </form>
        </CardContent>
      </Card>
     
    </>
  )
};

export default ContactForm;