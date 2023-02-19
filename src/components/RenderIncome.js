import React, {useEffect, useState }from "react";
import { PieChart, Pie } from "recharts";


function RenderIncome() {

const [data, SetData] = useState([])
const newData =[];


useEffect(() => {

    const transactions = JSON.parse(localStorage.getItem('transactions'));

    const onlyIncomes = transactions.filter(val => val.category ==='Income');
     
   
     
    onlyIncomes.forEach(element => {
    
       // console.log(element.value);
       newData.push( { name: element.description , value: element.value });
        
    });
    onlyIncomes.forEach(element => {
    
        // console.log(element.value);
         newData.push( { name: element.description , value: element.value });
         
     });
     onlyIncomes.forEach(element => {
    
        // console.log(element.value);
         newData.push( { name: element.description , value: element.value });
         
     });
//  console.log(newData);
    // const newData = [
    //     { name: onlyIncomes[1].description , value: onlyIncomes[1].value },
    //     { name: "Group B", value: 300 },
    //     { name: "Group C", value: 400 },
    //     { name: "Group D", value: 200 },
    //     { name: "Group E", value: 278 },
    //     { name: "Group F", value: 189 }
    //   ];
      SetData(newData);

      

}, []);


  return (
  
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
  );
}
export default RenderIncome;
