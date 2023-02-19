
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import Typography from '@mui/material/Typography';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink','violet','purple','blue'];


const Pots = JSON.parse(localStorage.getItem('pots'));


const data = [
  {
    name: 'Bills',
    uv: Pots[0].value,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Charity',
    uv: Pots[1].value,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Eating Out',
    uv: Pots[2].value,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Entertainment',
    uv: Pots[3].value,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Expenses',
    uv: Pots[4].value,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Groceries',
    uv: Pots[5].value,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Holidays',
    uv: Pots[6].value,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Savings',
    uv: Pots[8].value,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Shopping',
    uv: Pots[9].value,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Transport',
    uv: Pots[10].value,
    pv: 4300,
    amt: 2100,
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


   
function RenderPots(){

    return (
     
      <>
      <Typography variant='h3' align='center'>Pots</Typography>


      <BarChart
      width={1060}
      height={600}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </>
    
    );
 
}
export default RenderPots;