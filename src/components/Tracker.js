import {useState} from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Tracker() {

  const [category, setCategory] = useState('');
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };


  return (
    <>
   <Typography variant='h2' align='center'>Add Transaction</Typography>
      <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }} >
        <CardContent>
          <form>
            <Grid container spacing={4} justifyContent="center" padding={10}>

            <Grid item xs={12} >
              <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DatePicker
                label="Date" 
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
             </LocalizationProvider>
             </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="input-category">Category</InputLabel>
                  <Select
                    labelId="Category"
                    id="category"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value={1}>Bills</MenuItem>
                    <MenuItem value={2}>Charity</MenuItem>
                    <MenuItem value={3}>Eating Out</MenuItem>
                    <MenuItem value={4}>Entertainment</MenuItem>
                    <MenuItem value={5}>Expenses</MenuItem>
                    <MenuItem value={6}>Groceries</MenuItem>
                    <MenuItem value={7}>Holidays</MenuItem>
                    <MenuItem value={8}>Income</MenuItem>
                    <MenuItem value={9}>Savings</MenuItem>
                    <MenuItem value={10}>Shopping</MenuItem>
                    <MenuItem value={11}>Transport</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField id='' 
                label='Description' 
                Placeholder='Enter description' 
                variant='outlined' 
                fullWidth 
                required />
              </Grid>

              <Grid item xs={12}>
                <TextField 
                type='number' 
                id='' 
                label='Value' 
                Placeholder='Please enter the value' 
                variant='outlined' 
                fullWidth 
                required />
              </Grid>

              <Grid item xs={12}>
                <Button 
                type="submit" 
                variant='contained' 
                fullWidth> Add Transaction </Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>


    </>
  );
}

export default Tracker;