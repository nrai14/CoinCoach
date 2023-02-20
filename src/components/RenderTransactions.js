

import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import { useState, useEffect } from 'react';


function RenderTransactions() {

  const [textOnScreen, setText]= useState('');
  

  useEffect(() => {
    const rows = JSON.parse(localStorage.getItem('transactions'));

    const columns = [
      {
        field: 'id',
        headerName: '#',
        width: 10,
        headerClassName: 'dataGridHeader',
      },
      {
        field: 'date',
        headerName: 'Date',
        width: 160,
        editable: false,
        headerClassName: 'dataGridHeader',
      },
      {
        field: 'category',
        headerName: 'Category',
        width: 200,
        editable: false,
        headerClassName: 'dataGridHeader',
      },
      {
        field: 'description',
        headerName: 'Description',
        width: 200,
        editable: false,
        headerClassName: 'dataGridHeader',
       
      },
      {
        field: 'value',
        headerName: 'Value',
        type: 'number',
        width: 160,
        editable: false,
        headerClassName: 'dataGridHeader',
  
      }
    ];
  
    if(rows) {

      setText(
      <Box sx={{ height: '90%', width: '100%','& .dataGridHeader': {
        backgroundColor: '#001C55',
        color:'#fff',
        fontSize: 16
      },}}>
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
  
      setText(<Typography variant='body1' align='center'>There are no transactions stored. Transactions will be shown in a table.</Typography>);
  
    }
  
  },[]);



  

  return (
    <>
      <Typography variant='h6' align='center'>Transactions History</Typography>
      
      {textOnScreen}
      
    </>
  )
};

export default RenderTransactions;