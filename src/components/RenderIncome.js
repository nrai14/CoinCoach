import React, { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";
import Typography from '@mui/material/Typography';
import { RadialBarChart, RadialBar, Legend } from "recharts";


function RenderIncome() {


  const [textOnScreen, setText] = useState('');
  //const [data, SetData] = useState([]);

  const style = {
    top: 30,
    left: 400,
    lineHeight: "44px"
  };


  useEffect(() => {

    setText(<Typography variant='body1' align='left'>There are no Incomes stored.</Typography>);

    const newData = [];

    const transactions = JSON.parse(localStorage.getItem('transactions'));

    if (transactions) {

      const onlyIncomes = transactions.filter(val => val.category === 'Income');

      if (onlyIncomes.length > 0) {

        const reverse = onlyIncomes.reverse();


      //   reverse.map((e) => (
           
      //     e.value = '£ ' +  e.value
 
      // ));



        for (let index = 0; (index < reverse.length && index < 5); index++) {

          newData.push({ 

            name:  '£' + reverse[index].value + ' - ' + reverse[index].date,
            uv: +reverse[index].value,      
            fill: "#222479"


           });

        }

        //SetData(newData);

        setText(
          
          // <PieChart width={400} height={400}   >
          //   <Pie

          //     dataKey="value"
          //     startAngle={180}
          //     endAngle={0}
          //     data={newData}
          //     cx={200}
          //     cy={200}
          //     outerRadius={130}
          //     fill="#001C55"
          //     label

          //   />
          // </PieChart>
          
          
          <RadialBarChart 
            width={500} 
            height={300} 
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
        <Legend
          iconSize={20}
          width={600}
          height={240}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
          
        />
      </RadialBarChart>
          
          
          );


      }


    }



  }, []);


  return (

    <>
     
      <Typography variant='h4' align='center' sx={{p:5}} >Most Recent Incomes </Typography>
      {textOnScreen}


    </>

  );
}
export default RenderIncome;
