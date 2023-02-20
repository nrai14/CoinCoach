
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useState } from "react";

function ContactForm() {

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
                Placeholder='Enter name' 
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
                Placeholder='Enter email' 
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
                Placeholder='Please type your message here' 
                onChange={handleChange}
                variant='outlined' 
                fullWidth 
                required />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" 
                variant='contained' 
                fullWidth> 
                Submit
                </Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>

    </>
  )
};

export default ContactForm;