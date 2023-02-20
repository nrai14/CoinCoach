import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

function RenderCards() {

    const Pots = JSON.parse(localStorage.getItem('pots'));

    return (
      <>
    <Box sx={{ display: 'flex', gap: 8, flexWrap: 'wrap', p: 20, m: 0,  }}>
    <Card  sx={{ maxWidth: 250, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted    
          >
            <source
              src="https://static.vecteezy.com/system/resources/previews/001/803/901/mp4/euro-coins-falling-into-a-glass-jar-free-video.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="h1"
            
            fontWeight="lg"
            textColor="#fff"
           
            mt={{ xs: 12, sm: 18 }}
            
          >
            Total Income : £{Pots[7].value}
          </Typography>
        </CardContent>
      </Card>

      <Card  sx={{ maxWidth: 250, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
          
          >
            <source
              src="https://static.vecteezy.com/system/resources/previews/002/014/262/mp4/woman-puts-coins-in-a-piggy-free-video.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="h1"
            fontWeight="lg"
            textColor="#000"
            mt={{ xs: 12, sm: 18 }}
          >
            Total Savings :£{Pots[8].value}
          </Typography>
        </CardContent>
      </Card>


      <Card  sx={{ maxWidth: 250, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
          
          >
            <source
              src="https://static.vecteezy.com/system/resources/previews/002/039/650/mp4/woman-holding-smartphone-and-credit-ard-free-video.mp4"
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="h1"
            fontWeight="lg"
            textColor="#000"
            mt={{ xs: 12, sm: 18 }}
          >
            Balance : £{Pots[11].value}
          </Typography>
        </CardContent>
      </Card>
      {/* <Card  sx={{ maxWidth: 250, flexGrow: 1 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            Image
          </Typography>
        </CardContent>
      </Card> */}
     
    
    </Box>

      </>
    );
  }
  
  export default RenderCards;