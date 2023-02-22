import OpenAi from '../components/OpenAi';
import CryptoInfo from '../components/CryptoInfo';
import { useState, useEffect } from 'react';

function CryptoTracker() {

    const [cryptoData, setCryptoData] = useState([]);
    const api_key = 'f237a2061812440599b5684a5ae72bc9';
    const crypto_name = 'bitcoin';
    
    useEffect(() => {
      
      fetch(`https://newsapi.org/v2/everything?q=${crypto_name}&apiKey=${api_key}`)
        .then(res => res.json())
        .then(data => setCryptoData(data.articles))
        console.log(cryptoData)
        
    
    }, [])


    return (
        <>

            <OpenAi cryptoData={cryptoData.slice(0, 5)} />

            <CryptoInfo cryptoData={cryptoData} />
            
        </>
    )
};

export default CryptoTracker;