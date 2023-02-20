

import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import { useState, useEffect } from 'react';


function RenderTransactions() {

  const [text, setText]= useState('');
  


  // const rows = JSON.parse(localStorage.getItem('pots'));




  useEffect(() => {
    const rows = JSON.parse(localStorage.getItem('transactions'));

    const columns = [
      {
        field: 'id',
        headerName: '#',
        width: 10
      },
      {
        field: 'date',
        headerName: 'Date',
        width: 160,
        editable: false,
      },
      {
        field: 'category',
        headerName: 'Category',
        width: 160,
        editable: false,
      },
      {
        field: 'description',
        headerName: 'Description',
        width: 160,
        editable: false,
      },
      {
        field: 'value',
        headerName: 'Value',
        type: 'number',
        width: 160,
        editable: false,
  
      },
    ];
  
    if(rows) {

      setText(<Box sx={{ height: '90%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box> );
  
    }
    else {
  
      setText(<Typography variant='h4' align='center'>There is no history yet.</Typography>);
  
    }
  
  },[]);



  

  return (
    <>
      <Typography variant='h6' align='center'>Transactions History</Typography>
      
     {text}
       
    

    


    </>
  )
};

export default RenderTransactions;