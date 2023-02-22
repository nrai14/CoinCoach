import { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';


function RenderTransactions() {

  const [textOnScreen, setText] = useState('');


  useEffect(() => {

    //Gets transactions from Local Storage to Render using dataGrid from MUI 
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
        width: 100,
        editable: false,
        headerClassName: 'dataGridHeader',
      },
      {
        field: 'category',
        headerName: 'Category',
        width: 150,
        editable: false,
        headerClassName: 'dataGridHeader',
      },
      {
        field: 'description',
        headerName: 'Description',
        width: 150,
        editable: false,
        headerClassName: 'dataGridHeader',

      },
      {
        field: 'value',
        headerName: 'Value',
        type: 'number',
        width: 100,
        editable: false,
        headerClassName: 'dataGridHeader',

      }
    ];

    if (rows) {

      //Filter Transactions to get rid of null or empty 
      const newRows = rows.filter(a => a);

      // Adds £ to values to show on colum values
      newRows.map((e) => ( e.value = '£ ' + e.value ));

     //Sets DataGrid to show on screen
      setText(
        <Box 
        
        sx={{
          height: '80%', 
          width: '100%', 
          '& .dataGridHeader': {
          backgroundColor: '#001C55',
          color: '#fff',
          fontSize: 18
          },
        }}
        
      
        >
          <DataGrid
            rows={newRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>);

    }
    else {
      //If there are no transactions stored, shows a different banner
      setText(<Typography variant='body1' align='center'>There are no transactions stored. Transactions will be shown in a table.</Typography>);

    }

  }, []);

  return (
    <>
      <Typography variant='h4' align='center' sx={{ p: 5 }}>Transactions History</Typography>
      {/*Shows the correct banner depending on what is on the Pots at the moment */}
      {textOnScreen}

    </>
  )
};

export default RenderTransactions;