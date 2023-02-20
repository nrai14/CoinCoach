import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import moment from 'moment';

function AddTransaction() {


  const theme = createTheme({
    palette: {
      brand: {
        main: '#001C55',
        contrastText: '#fff',
      },
    },
  });


  const [transactions, setTransactions] = useState('');
  const [date, setDate] = useState(null);
  const [formData, setFormData] = useState({

    category: '',
    description: '',
    value: ''
  });


  // function refreshPage() {
  //   window.location.reload(false);
  // }


  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
   
    // console.log(formData);
   // console.log(date);

  };


  const handleSubmit = (event) => {

    event.preventDefault();
    // console.log("Inside");
    // console.log(formData);
    // console.log(date);

    //Add new transactions to the array
    const existingTransactions = JSON.parse(localStorage.getItem('transactions'));

    if (existingTransactions) {
    
      const newId = existingTransactions.length;
    
      const formattedDate = moment(`${date}`).format('DD/MM/YYYY');
    
      const newTransactions =
      {
        id: newId,
        date: formattedDate,
        category: formData.category,
        description: formData.description,
        value: formData.value,
      };

      console.log(newTransactions);

      //Push new element into the Array 
      setTransactions(newTransactions)
      existingTransactions.push(transactions);
      localStorage.setItem('transactions', JSON.stringify(existingTransactions));
      
      
      

    }
    else {
      // Create first transaction for local storage with id = 0
      const formattedDate = moment(`${date}`).format('DD/MM/YYYY');
      const newTransactions =
      {
        id: 0,
        date: formattedDate,
        category: formData.category,
        description: formData.description,
        value: formData.value,
      };

      localStorage.setItem('transactions', JSON.stringify([newTransactions]));

    }


    // //Pot logics 
    // //id 7 = Income adds to Balance and to Income pot
    // //All other ids subtract from  Balance and add to individual pots
    const MyPots = JSON.parse(localStorage.getItem('pots'));
 
    if (formData.category === 'Income') {
      //Adds to pot 11 (Balance)
      //Adds to pot 7   
      MyPots[11].value = +MyPots[11].value + +formData.value;
      MyPots[7].value = +MyPots[7].value + +formData.value;
    }
    else { 
      //Subtract from pot 11
      //Adds to individual pot
      MyPots[11].value = MyPots[11].value - formData.value;
      let idPot = 0  
      switch (formData.category) {
        case 'Bills':
           idPot = 0;
          break;
        case 'Charity':
          idPot = 1;
          break;
        case 'Eating Out':
          idPot = 2;
          break;
        case 'Entertainment':
          idPot = 3;
          break;
        case 'Expenses':
           idPot = 4;
          break;
        case 'Groceries':
           idPot = 5;
          break;
        case 'Holidays':
           idPot = 6;
          break;
        case 'Savings':
           idPot = 8;
          break;
        case 'Shopping':
           idPot = 9;
          break;
        case 'Transport':
         idPot = 10;
          break;

       }
     MyPots[idPot].value = +MyPots[idPot].value + +formData.value;
    }

    localStorage.setItem('pots', JSON.stringify(MyPots));

    //Cleans inputs 
    setDate(null);
    setFormData({
      category: '',
      description: '',
      value: ''
    });

    // refreshPage();
    

  }


  return (
    <>
      {/* <Typography variant='h3' align='center'>Add Transaction</Typography> */}
      <Card style={{ maxWidth: 400, margin: "0 auto", padding: "0px 5px" }} >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4} justifyContent="center" padding={2}>

              <Grid item xs={12} >
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DatePicker
                    label="Date"
                    value={date}
                   
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}

                    renderInput={(params) => <TextField fullWidth required {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel id="input-category">Category</InputLabel>
                  <Select
                    labelId="Category"
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}>
                    <MenuItem value={'Bills'}>Bills</MenuItem>
                    <MenuItem value={'Charity'}>Charity</MenuItem>
                    <MenuItem value={'Eating Out'}>Eating Out</MenuItem>
                    <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
                    <MenuItem value={'Expenses'}>Expenses</MenuItem>
                    <MenuItem value={'Groceries'}>Groceries</MenuItem>
                    <MenuItem value={'Holidays'}>Holidays</MenuItem>
                    <MenuItem value={'Income'}>Income</MenuItem>
                    <MenuItem value={'Savings'}>Savings</MenuItem>
                    <MenuItem value={'Shopping'}>Shopping</MenuItem>
                    <MenuItem value={'Transport'}>Transport</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name='description'
                  value={formData.description}
                  label='Description'
                  placeholder='Enter description'
                  variant='outlined'
                  onChange={handleChange}
                  fullWidth
                  required />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type='number'
                  name='value'
                  value={formData.value}
                  label='Value'
                  placeholder='Please enter the value'
                  variant='outlined'
                  onChange={handleChange}
                  fullWidth
                  required />
              </Grid>

              <Grid item xs={12}>

              <ThemeProvider theme={theme}>
                <Button
                  type="submit"
                  variant='contained'
                  color= 'brand'
                  fullWidth
                  > Add Transaction </Button>
                  </ThemeProvider>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>


    </>
  );
}

export default AddTransaction;