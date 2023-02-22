import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';



import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions } from '@mui/material';



function CryptoInfo({ cryptoData }) {


  const theme = createTheme({
    palette: {
      brand: {
        main: '#001C55',
        contrastText: '#fff',
      },
    },
  });

  return (
    <>



      <Typography variant='h4' align='center' pt="50px">Short Crypto News </Typography>


      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"

      >

        {cryptoData.slice(0, 5).map((article, index) => (

          <Grid item xs={3}>


            <Card sx={{ maxWidth: 445, mb: 3, mt: 3 }}>
              <CardActionArea
                target="_blank"
                href={article.url}
                component="a"
              >
                <CardMedia
                  component="img"
                  height="140"
                  //image={article.urlToImage}
                  image="https://static.vecteezy.com/system/resources/previews/007/459/324/non_2x/bitcoin-btc-group-included-cryptocurrency-and-stock-chart-candlestick-down-trend-lose-stock-on-stack-of-coins-use-technology-cryptocurrency-blockchain-close-up-coin-free-photo.jpg"
                  alt="News image"
                />
                <CardContent>
                <Typography variant="body2" >
                    {article.publishedAt}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" >
                   
                    Description Here{article.description}
                  </Typography>
                </CardContent>
              </CardActionArea>

            </Card>

          </Grid>


        ))}
      </Grid>
    </>
  );
}

export default CryptoInfo;
