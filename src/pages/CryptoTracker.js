import { useState, useEffect } from 'react';

import OpenAi from '../components/OpenAi';
import CryptoInfo from '../components/CryptoInfo';

import Box from "@mui/material/Box";

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

        <CryptoInfo cryptoData={cryptoData} />
        
        </Box>
            
        </>
    )
};

export default CryptoTracker;