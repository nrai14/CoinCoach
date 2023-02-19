import React, {useEffect, useState }from "react";
import { PieChart, Pie } from "recharts";
import Typography from '@mui/material/Typography';


function RenderIncome() {

const [data, SetData] = useState([])
const newData =[];


useEffect(() => {

      const transactions = JSON.parse(localStorage.getItem('transactions'));

      const onlyIncomes = transactions.filter(val => val.category ==='Income');
     
      const reverse = onlyIncomes.reverse();
     
      for (let index = 0; (index < reverse.length && index < 5) ; index++) {
       
       newData.push({value: +reverse[index].value});
      
      }
 
      SetData(newData);

      

}, []);


  return (
  
    <>
     <Typography variant='h6' align='center'>Most recent Incomes </Typography>

     <PieChart width={400} height={400} >
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={200}
        cy={200}
        outerRadius={130}
        fill="#001C55"
        label
      />
    </PieChart>
    
    
    </>
  
  );
}
export default RenderIncome;
