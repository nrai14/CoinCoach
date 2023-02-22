import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Card from '@mui/material/Card';


import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';




function RenderTopFive() {

  const [textOnScreen, setText] = useState('');

  useEffect(() => {

    setText(<Typography variant='body1' align='left'>There are no transactions stored.</Typography>);

    const Pots = JSON.parse(localStorage.getItem('pots'));

    const Sorted = Pots.sort((a, b) => b.value - a.value);



    const Filtered = Sorted.filter(function (el) {
      return ((el.category !== 'Income') && (el.category !== 'Balance'));
    });



    if (Filtered.length > 5) {

      setText(


        <Card sx={{ maxWidth: 250, color: '#222479', p: 3, m:5 , mt:20 ,bgcolor: '#fff', }} >
          <Typography variant='h4' align='center'>Top 5 Expenditures </Typography>
         
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <LooksOneIcon
                  fontSize='large' />
              </ListItemIcon>
              <ListItemText primary={'£' + Filtered[0].value + ' - ' + Filtered[0].category} />

            </ListItem>
            <ListItem disablePadding>

              <ListItemIcon>
                <LooksTwoIcon fontSize='large' />
              </ListItemIcon>
              <ListItemText primary={'£' + Filtered[1].value + ' - ' + Filtered[1].category} />

            </ListItem>

            <ListItem disablePadding>

              <ListItemIcon>
                <Looks3Icon fontSize='large' />
              </ListItemIcon>
              <ListItemText primary={'£' + Filtered[2].value + ' - ' + Filtered[2].category} />

            </ListItem>
            <ListItem disablePadding>

              <ListItemIcon>
                <Looks4Icon fontSize='large' />
              </ListItemIcon>
              <ListItemText primary={'£' + Filtered[3].value + ' - ' + Filtered[3].category} />

            </ListItem>
            <ListItem disablePadding>

              <ListItemIcon>
                <Looks5Icon fontSize='large' />
              </ListItemIcon>
              <ListItemText primary={'£' + Filtered[4].value + ' - ' + Filtered[4].category} />

            </ListItem>
          </List>

        </Card>



      );
    }


  }, []);
  return (
    <>

      {textOnScreen}


    </>
  );
};



export default RenderTopFive;
