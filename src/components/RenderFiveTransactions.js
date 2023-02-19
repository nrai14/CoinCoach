

import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import Typography from '@mui/material/Typography';


function RenderFiveTransactions() {

const transactions = JSON.parse(localStorage.getItem('transactions'));


// const data = [];

// data.push({name: 'Group A', value: +transactions[0].value});
// //   { name: 'Group A', value: 300 },
// //   { name: 'Group B', value: 300 },
// //   { name: 'Group C', value: 300 },
// //   { name: 'Group D', value: 200 },
// //   { name: 'Group D', value: 200 },
// // ;

// const data = [
//     {name: 'Group A', value: +transactions[0].value},
//     {name: 'Group A', value: +transactions[1].value},
//     {name: 'Group A', value: +transactions[2].value},
//     {name: 'Group A', value: +transactions[3].value},
//     {name: 'Group A', value: +transactions[4].value}
//   ];

  const data = [
    {
      name: transactions[(transactions.length-1)].category + transactions[(transactions.length-1)].date,
      uv: transactions[(transactions.length-1)].value,
      pv: 2400,
      fill: "#8884d8"
    },
    {
        name:transactions[(transactions.length-2)].category,
        uv: transactions[(transactions.length-2)].value,
      pv: 4567,
      fill: "#83a6ed"
    },
    {
        name: transactions[(transactions.length-3)].category,
        uv: transactions[(transactions.length-3)].value,
      pv: 1398,
      fill: "#8dd1e1"
    },
    {
        name: transactions[(transactions.length-4)].category,
        uv: transactions[(transactions.length-4)].value,
      pv: 9800,
      fill: "#82ca9d"
    },
    {
        name: transactions[(transactions.length-5)].category,
        uv: transactions[(transactions.length-5)].value,
      pv: 3908,
      fill: "#a4de6c"
    }
   
  ];
  
  const style = {
    top: 0,
    left: 350,
    lineHeight: "34px"
  };


return(
<>
<Typography variant='h6' align='left'>5 recent Transactions</Typography>

<RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#000" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={600}
        height={240}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>

</>


);


}
export default RenderFiveTransactions;