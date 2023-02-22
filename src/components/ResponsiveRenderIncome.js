import React, { useEffect, useState } from "react";

import { RadialBarChart, RadialBar } from "recharts";

import Typography from '@mui/material/Typography';

function RenderIncome() {

  const [textOnScreen, setText] = useState('');


  useEffect(() => {

    //Initialize the banner of screen in case there are no incomes stored.
    setText(<Typography variant='body1' align='left'>There are no Incomes stored.</Typography>);

    const newData = [];

    //Gets transactions from Local Storage to Render using RadialBarChart from Recharts 
    const transactions = JSON.parse(localStorage.getItem('transactions'));

    if (transactions) {

      //Filter only the transactions that are Incomes
      const onlyIncomes = transactions.filter(val => val.category === 'Income');

      if (onlyIncomes.length > 0) {

        //Reverse the array to get the new transactions first
        const reverse = onlyIncomes.reverse();

        for (let index = 0; (index < reverse.length && index < 5); index++) {

          //Creates a new data element for each income in the new array (no more than 5)
          newData.push({
            name: '£' + reverse[index].value + ' - ' + reverse[index].date,
            uv: +reverse[index].value,
            fill: "#222479"
          });

        }
        //Sets chart to show on screen
        setText(
          <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            data={newData}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#F7F7F7" }}
              background
              clockWise
              dataKey="uv"
            />
           
          </RadialBarChart>

       );
      }
    }
  }, []);

  return (
    <>
      <Typography 
      variant='h4' 
      align='center' 
      sm={{ p: 5 }}
      sx={{ pt: 20 }}
      
      >
      Most Recent Incomes 
      </Typography>
      {/*Shows the correct banner depending on what is on the Pots at the moment */}   
      {textOnScreen}
    </>

  );
}
export default RenderIncome;
