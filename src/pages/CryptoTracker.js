import React, { useState, useEffect } from 'react';

import OpenAi from '../components/OpenAi';
import CryptoInfo from '../components/CryptoInfo';

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
   
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <Typography variant='h5' align='center'>The API is not working at the moment. Please try again later.</Typography>;
      }
  
      return this.props.children; 
    }
  }


function CryptoTracker() {

    const [cryptoData, setCryptoData] = useState([]);
    const api_key = 'f237a2061812440599b5684a5ae72bc9';
    const crypto_name = 'bitcoin';
    
    useEffect(() => {
      
      fetch(`https://newsapi.org/v2/everything?q=${crypto_name}&apiKey=${api_key}`)
        .then(res => res.json())
        .then(data => setCryptoData(data.articles))
 
    }, [])


    return (
        <>
       <Box 
       mt= {10} 
       pb={10} 
       pr={5} 
       pl={5} 
       sx={{ bgcolor: '#c7d8e1',
        border: 2, 
        borderColor: '#F7F7F7',
        borderRadius: 2, 
        maxWidth: '80%', 
        margin: "0 auto" }}>

        <OpenAi cryptoData={cryptoData.slice(0, 5)} />
        <ErrorBoundary>
        <CryptoInfo cryptoData={cryptoData} />
        </ErrorBoundary>
        </Box>
            
        </>
    )
};

export default CryptoTracker;