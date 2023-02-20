import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';


import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';



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
             
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <LooksOneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <LooksTwoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                      </ListItemButton>
                    </ListItem>
                  </List>
               
              </Box>
                


            );
        }
    
    
      },[]);
    return (
        <>
         <Typography variant='h6' align='center'>Top 5 Expenditures </Typography>
         
         {textOnScreen}
       
        
        </>
    );
};



export default RenderTopFive;
