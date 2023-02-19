

import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';



function ShowPots() {

 
 //const rows = JSON.parse(localStorage.getItem('transactions'));
 const rows = JSON.parse(localStorage.getItem('pots'));

 const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
      editable: false,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 150,
      editable: false,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 150,
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
  


    return (
        <>
            
            <Typography variant='h2' align='center'>ShowPots</Typography>



            
      {/* {currentPots.map((pot, index) => (
        <div key={index} > 
            <h5 >{pot.category}</h5>
            <p >{pot.value}</p>  
        </div>
      ))} */}

{/* {currentTransactions.map((transaction, index) => (
        <div key={index} > 
        <h5 >{transaction.date}</h5>
            <h5 >{transaction.category}</h5>
            <h5 >{transaction.description}</h5>
            <p >{transaction.value}</p>  
        </div>
      ))} */}





    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>


   
    
    
      
   


  
            

        </>
    )
};

export default ShowPots;