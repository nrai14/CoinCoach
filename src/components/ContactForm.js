import { useState } from "react";

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { CardActionArea } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';


function ContactForm() {

  // Set style for for button on form
  const theme = createTheme({
    palette: {
      brand: {
        main: '#001C55',
        contrastText: '#fff',
      },
    },
  });



  const [success, setSuccess] = useState(false);

  //Sets form inputs and key for api
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    access_key: 'f418e9dd-e235-40ff-9982-2df8fd1e3766'


  });

  //On change values are shown on form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  //On Submit call to web3forms API and send email to Sabrinas's email account
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

      })
      .catch(error => console.log(error));

  };



  return (
    <>

      <Box
        mt={10}
        pb={10}
        pr={5}
        pl={5}
        sx={{
          bgcolor: '#c7d8e1',
          border: 2,
          borderColor: '#F7F7F7',
          borderRadius: 2,
          maxWidth: '80%',
          margin: "0 auto"
        }}>

        <Typography
          variant='h3'
          align='center'
          sx={{ p: 5 }}>
          Contact Us
        </Typography>

        <Typography
          variant='h6'
          align='center'
          sx={{ p: 5 }}>
          Please send us your message on contact us directly on github. Click on our cards to get the link.
        </Typography>


        <Grid
          container
          spacing={3}
          justifyContent="center"
          pt={1}>

          <Grid item xs={12} sm={6} >
            <Card style={{ maxWidth: 500, 
              margin: "0 auto", 
              padding: "30px 5px" }} >
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Grid container 
                  spacing={4} 
                  justifyContent="center" 
                  padding={1}>
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
                          color='brand'
                          fullWidth>
                          Submit
                        </Button>
                      </ThemeProvider>
                    </Grid>

                    <Grid item xs={12}>
                      {success && (<Typography variant='h5' align='center'> Thank you very much for your message. We will in contact soon.</Typography>)}
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} >
            <Card style={{ maxWidth: 500, 
              margin: "0px", 
              padding: "5px 5px" }} >
              <CardActionArea
                target="_blank"
                href="https://github.com/nrai14"
                component="a">
                <CardHeader
                  avatar={
                    <Avatar alt="Nish Rai"
                      src="https://avatars.githubusercontent.com/u/107814656?v=4"
                      sx={{ width: 80, height: 80 }}
                    />
                  }
                  title='Nish Rai - Front-End Web Developer (working with HTML/CSS/JavaScript) 🥽 VR enthusiast.'
                  
                />
              </CardActionArea>
            </Card>

            <Card style={{ maxWidth: 500, marginTop: "10px", padding: "5px 5px" }} >
              <CardActionArea
                target="_blank"
                href="https://github.com/MichalMatu"
                component="a"
              >
                <CardHeader
                  avatar={
                    <Avatar alt="Michal Matuszewski"
                      src="	https://avatars.githubusercontent.com/u/90936684?v=4"
                      sx={{ width: 80, height: 80 }}
                    />
                  }
                  title='Michal Matuszewski - Front-End Developer. '
                  
                />
              </CardActionArea>
            </Card>

            <Card style={{ maxWidth: 500, marginTop: "10px", padding: "5px 5px" }} >
              <CardActionArea
                target="_blank"
                href="https://github.com/lauralp92"
                component="a"
              >
                <CardHeader
                  avatar={
                    <Avatar alt="Laura P"
                      src="	https://avatars.githubusercontent.com/u/115834312?v=4"
                      sx={{ width: 80, height: 80 }}
                    />
                  }
                  title='Laura P. - English grad turned Front-End Developer.'     
                />
              </CardActionArea>
            </Card>

            <Card style={{ maxWidth: 500,
               marginTop: "10px",
              padding: "5px 5px" }} >
              <CardActionArea
                target="_blank"
                href="https://github.com/sabrina-martorelli"
                component="a"
              >
                <CardHeader
                  avatar={
                    <Avatar alt="Sabrina Lorena Martorelli"
                      src="https://avatars.githubusercontent.com/u/10901272?v=4"
                      sx={{ width: 80, height: 80 }}
                    />
                  }
                  title='Sabrina Lorena Martorelli - Software Engineer / Front-End Developer.'
                  
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
};

export default ContactForm;