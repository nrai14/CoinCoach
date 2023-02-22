

import React, { useState, useEffect } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import Typography from '@mui/material/Typography';


function RenderFiveTransactions() {

  const [textOnScreen, setText] = useState('');

  useEffect(() => {

    const transactions = JSON.parse(localStorage.getItem('transactions'));



    const style = {
      top: 30,
      left: 350,
      lineHeight: "44px"
    };

    if (transactions && transactions.length > 4) {

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

      setText(<Typography variant='body1' align='center'>There are less than 5 transactions stored.</Typography>);

    }
  }, []);

  return (
    <>
      <Typography variant='h4' align='center' sx={{ p: 5 }}>5 Most Recent Transactions</Typography>
      {textOnScreen}

    </>


  );


}
export default RenderFiveTransactions;