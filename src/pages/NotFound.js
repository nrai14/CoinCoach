import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function NotFound() {
    return (
        <>
     <Box 
     pb={10} 
     pr={5} 
     pl={5} 
     sx={{ bgcolor:'#c7d8e1',
      border: 2,
      borderColor: '#F7F7F7', 
      borderRadius: 3, 
      maxWidth: '70%', 
      margin: "0 auto" }}>

    <Typography 
    pt={10} 
    pb={10} 
    variant='h3' 
    align='center'>
    Page not found
    </Typography>

    <Typography  
    pt={10} 
    pb={50} 
    variant='h4' 
    align='center'>
    The URL doesn't exist on the site.
    </Typography>
    </Box>
                
        </>
    )
};

export default NotFound;