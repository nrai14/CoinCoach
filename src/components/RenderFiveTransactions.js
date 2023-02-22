
import React, { useState, useEffect } from "react";

import { RadialBarChart, RadialBar, Legend } from "recharts";

import Typography from '@mui/material/Typography';


function RenderFiveTransactions() {

  const [textOnScreen, setText] = useState('');

  useEffect(() => {

    //Gets transactions from Local Storage to Render using RadialBarChart from Recharts 
    const transactions = JSON.parse(localStorage.getItem('transactions'));

    //Style for labels
    const style = { 
      top: 30,
      left: 400,
      lineHeight: "44px"
    };

    if (transactions && transactions.length > 4) {

      //Gets the 5 most recent transactions
      const data = [
        {
          name: '£' + transactions[(transactions.length - 1)].value + ' - ' + transactions[(transactions.length - 1)].category + ' - ' + transactions[(transactions.length - 1)].date,
          uv: transactions[(transactions.length - 1)].value,
          fill: "#222479"
        },
        {
          name: '£' + transactions[(transactions.length - 2)].value + ' - ' + transactions[(transactions.length - 2)].category + ' - ' + transactions[(transactions.length - 2)].date,
          uv: transactions[(transactions.length - 2)].value,
          fill: "#1446a7"
        },
        {
          name: '£' + transactions[(transactions.length - 3)].value + ' - ' + transactions[(transactions.length - 3)].category + ' - ' + transactions[(transactions.length - 3)].date,
          uv: transactions[(transactions.length - 3)].value,
          fill: "#346568"
        },
        {
          name: '£' + transactions[(transactions.length - 4)].value + ' - ' + transactions[(transactions.length - 4)].category + ' - ' + transactions[(transactions.length - 4)].date,
          uv: transactions[(transactions.length - 4)].value,
          fill: "#488485"
        },
        {
          name: '£' + transactions[(transactions.length - 5)].value + ' - ' + transactions[(transactions.length - 5)].category + ' - ' + transactions[(transactions.length - 5)].date,
          uv: transactions[(transactions.length - 5)].value,
          fill: "#96bac4"
        }

      ];

      //Sets chart to show on screen
      setText(

        <RadialBarChart
          width={500}
          height={300}
          cx={150}
          cy={150}
          innerRadius={20}
          outerRadius={140}
          barSize={20}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#F7F7F7" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={20}
            width={600}
            height={240}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      )

    }
    else {

      //If there is less than 5 Transaction stored, shows a different banner
      setText(<Typography variant='body1' align='center'>There are less than 5 transactions stored to display.</Typography>);

    }
  }, []);

  return (
    <>
      <Typography 
      variant='h4' 
      align='center' 
      sx={{ p: 5 }}>
      5 Most Recent Transactions
      </Typography>
     
      {/*Shows the correct banner depending on what is on the Pots at the moment */}
      {textOnScreen}

    </>


  );


}
export default RenderFiveTransactions;