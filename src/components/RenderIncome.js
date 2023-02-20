import React, {useEffect, useState }from "react";
import { PieChart, Pie } from "recharts";
import Typography from '@mui/material/Typography';


function RenderIncome() {


const [textOnScreen, setText]= useState('');
//const [data, SetData] = useState([]);


useEffect(() => {
  
      setText(<Typography variant='body1'  align='left'>There are no Incomes stored.</Typography>);
     
      const newData =[];

      const transactions = JSON.parse(localStorage.getItem('transactions'));

      if(transactions){
    
      const onlyIncomes = transactions.filter(val => val.category ==='Income');
      
      if (onlyIncomes.length > 0) {
        
      const reverse = onlyIncomes.reverse();
   
      for (let index = 0; (index < reverse.length && index < 5) ; index++) {
       
       newData.push({value: +reverse[index].value});
      
      }
 
      //SetData(newData);

      setText(
      <PieChart width={400} height={400}   >
        <Pie
          
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={newData}
          cx={200}
          cy={200}
          outerRadius={130}
          fill="#001C55"
          label
         
        />
      </PieChart>);


     }

  
    }

  

}, []);


  return (
  
    <>
     <Typography variant='h6' align='center' >Most recent Incomes </Typography>

     {textOnScreen}
    
    
    </>
  
  );
}
export default RenderIncome;
