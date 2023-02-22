import React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/material/Grid';

function RenderCards() {


  const [Pot1, setPot1] = useState(0);
  const [Pot2, setPot2] = useState(0);
  const [Pot3, setPot3] = useState(0);

  useEffect(() => {
    const Pots = JSON.parse(localStorage.getItem('pots'));

    // Gets information of Balance, Income and Savings for the cards with videos
    if (Pots) {
      setPot1(Pots[11].value);
      setPot2(Pots[7].value);
      setPot3(Pots[8].value);
    }


  }, []);


  return (
    <>
      <Box sx={{ display: 'flex', gap: 8, flexWrap: 'wrap', p: 5, m: 5, }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: 580, flexGrow: 1 }}>
              <CardCover>
                <video
                  autoPlay
                  loop
                  muted>
                  <source
                    src="https://static.vecteezy.com/system/resources/previews/002/039/650/mp4/woman-holding-smartphone-and-credit-ard-free-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </CardCover>
              <CardContent>
                <Typography
                  fontSize={{xs:20, sm:30}}
                  fontWeight="lg"
                  textColor="#001C55"
                  mt={{ xs: 12, sm: 18 }}
                >Balance : £{Pot1}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: 250, flexGrow: 1 }}>
              <CardCover>
                <video
                  autoPlay
                  loop
                  muted>
                  <source
                    src="https://static.vecteezy.com/system/resources/previews/001/803/901/mp4/euro-coins-falling-into-a-glass-jar-free-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </CardCover>
              <CardContent>
                <Typography
                   fontSize={{xs:20, sm:30}}
                  fontWeight="lg"
                  textColor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >Income : £{Pot2}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: 250, flexGrow: 1 }}>
              <CardCover >
                <video
                  autoPlay
                  loop
                  muted>
                  <source
                    src="https://static.vecteezy.com/system/resources/previews/002/015/167/mp4/hand-puts-coins-in-a-piggy-bank-free-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </CardCover>
              <CardContent>
                <Typography
                   fontSize={{xs:20, sm:30}}
                  fontWeight="lg"
                  textColor="#fff"
                  mt={{ xs: 12, sm: 18 }}
                >Savings : £{Pot3}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default RenderCards;