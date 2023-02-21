
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
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

      <Box  pb={10} pr={5} pl={5} sx={{  bgcolor: ' #c7d8e1', border: 2, borderColor: '#F7F7F7', borderRadius: 3, maxWidth: '70%', margin: "0 auto" }}>
    
      <Typography variant='h3' align='center' sx={{p:5}}>Contact Us</Typography>
       
      <Typography variant='body 1' align='center' sx={{p:5}}>Please send us your message on contact us directly.</Typography>
       
     
      <Grid container spacing={1} justifyContent="center" pt={10} >
          
          <Grid item xs={6}>
          <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }} >
        <CardContent>
          <form  onSubmit={handleSubmit}>
            <Grid container spacing={3} justifyContent="center" padding={1}>
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
            
          </Grid>
          
          <Grid item xs={6}>
          
      
          </Grid>
      </Grid>
    



      </Box>
     
    </>
  )
};

export default ContactForm;