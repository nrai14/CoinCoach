import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';




function RenderTopFive() {

    const [textOnScreen, setText]= useState('');   

    useEffect(() => {
        
        setText(<Typography variant='body1'  align='left'>There are no transactions stored.</Typography>);
       
        const Pots = JSON.parse(localStorage.getItem('pots'));
       
        const Sorted = Pots.sort((a, b) => b.value-a.value);
        console.log(Sorted);
       // Sorted[0].value;

        if(Sorted.length > 5){

            setText( 
             
             //   <Box sx={{ width: '100%', maxWidth: 260, bgcolor: '#c1e9f4', color:'#c1e9f4' }}>
                
                <Card sx={{ maxWidth: 250, color:'#fff', p: 3, m: 16, bgcolor: '#488485', }} >
                   <Typography variant='h4' align='center'>Top 5 Expenditures </Typography>
                  <List>
                    <ListItem disablePadding> 
                        <ListItemIcon>
                          <LooksOneIcon 
                          fontSize='large' />
                        </ListItemIcon>
                        <ListItemText primary={Sorted[0].category +' -  £' + Sorted[0].value} />
                      
                    </ListItem>
                    <ListItem disablePadding>
                     
                        <ListItemIcon>
                          <LooksTwoIcon fontSize='large' />
                        </ListItemIcon>
                        <ListItemText primary={Sorted[1].category +' -  £' + Sorted[1].value} />
                   
                    </ListItem>

                    <ListItem disablePadding>
                     
                     <ListItemIcon>
                       <Looks3Icon fontSize='large' />
                     </ListItemIcon>
                     <ListItemText primary={Sorted[2].category +' -  £' + Sorted[2].value} />
                
                 </ListItem>
                 <ListItem disablePadding>
                     
                     <ListItemIcon>
                       <Looks4Icon  fontSize='large'/>
                     </ListItemIcon>
                     <ListItemText primary={Sorted[3].category +' -  £' + Sorted[3].value} />
                
                 </ListItem>
                 <ListItem disablePadding>
                     
                     <ListItemIcon>
                       <Looks5Icon  fontSize='large'/>
                     </ListItemIcon>
                     <ListItemText primary={Sorted[4].category +' -  £' + Sorted[4].value} />
                
                 </ListItem>
                  </List>
               
              </Card>
                


            );
        }
    
    
      },[]);
    return (
        <>
       
         
         {textOnScreen}
       
        
        </>
    );
};



export default RenderTopFive;
