
import React from 'react';
import { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import Typography from '@mui/material/Typography';

//Colours for the chart
const colors = ['#001C55', '#222479', '#1446a7',
  '#4c78c9', '#b7cdf7', '#346568', '#488485', '#67bfbf', '#96bac4', '#c1e9f4'];


function RenderTotalExpenses() {

  const [textOnScreen, setText] = useState('');

  useEffect(() => {

    //Gets Pots from local storage to render all values (no Balance) using BarChart from Recharts 
    const Pots = JSON.parse(localStorage.getItem('pots'));

    if (Pots) {

      //Array of data coming from each pot
      const data = [
        {
          name: 'Bills',
          uv: Pots[0].value,
        },
        {
          name: 'Charity',
          uv: Pots[1].value,
        },
        {
          name: 'Eating Out',
          uv: Pots[2].value,
        },
        {
          name: 'Entertainment',
          uv: Pots[3].value,
        },
        {
          name: 'Expenses',
          uv: Pots[4].value,
        },
        {
          name: 'Groceries',
          uv: Pots[5].value,
        },
        {
          name: 'Holidays',
          uv: Pots[6].value,
        },
        {
          name: 'Savings',
          uv: Pots[8].value,
        },
        {
          name: 'Shopping',
          uv: Pots[9].value,
        },
        {
          name: 'Transport',
          uv: Pots[10].value,
        },
      ];

      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

      //Sets chart to show on screen
      setText(
        <BarChart style={{ margin: "0 auto" }}
          width={1024}
          height={500}
          data={data}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar 
          dataKey="uv" 
          fill="#000" 
          shape={<TriangleBar/>} 
          label={{ position: 'top' }}>

            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              
            ))}
          </Bar>
        </BarChart>)

    }
    else {

       //If there are no  Transaction stored, shows a different banner
      setText(<Typography variant='h4' align='center'>There are no transactions stored.</Typography>);

    }

  }, []);


  return (
    <>
      <Typography 
      variant='h4' 
      align='center' 
      sx={{ p: 5 }}>
      Total Expenses - All times
      </Typography>

      {/*Shows the correct banner depending on what is on the Pots at the moment */}
      {textOnScreen}

    </>

  );

}
export default RenderTotalExpenses;
