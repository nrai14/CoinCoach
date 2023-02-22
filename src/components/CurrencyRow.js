import React , {useEffect} from 'react';


import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function CurrencyRow() {


 useEffect(() => {

    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: 'AYha1RX5SghCNX2wiOl831HAH8xfiy65'
      };
      
      fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
        .then(res=> res.json())
        .then(data => console.log(data))
        .catch(error => console.log('error', error));
    

 }, []);

    




    return (
        <>

            <Card style={{ maxWidth: 400, margin: "0 auto", padding: "5px 5px" }} >
                <CardContent>
                    <form >
                        <Grid container spacing={4} justifyContent="center" padding={5}>
                            <Grid item xs={6}>
                                <TextField
                                    type='number'
                                    name='value'
                                
                                    label='Value'
                                    placeholder='Please enter the value'
                                    variant='outlined'
                                    
                                    fullWidth
                                     />
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl fullWidth >
                                    <InputLabel id="input-category">Category</InputLabel>
                                    <Select
                                        labelId="Category"
                                        label="Category"
                                        name="category"
                                        >
                                        <MenuItem value={'ARS'}>ARS</MenuItem>
                                        <MenuItem value={'BTC'}>BTC</MenuItem>
                                        <MenuItem value={'EUR'}>EUR</MenuItem>
                                        <MenuItem value={'GBP'}>GBP</MenuItem>
                                        <MenuItem value={'USD'}>USD</MenuItem>
                                     
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </form>
                </CardContent>
            </Card>


        </>
    );
}

export default CurrencyRow;
