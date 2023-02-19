

import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



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


   
    
    
        <BarChart width={550} height={400} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
   


  
            

        </>
    )
};

export default ShowPots;