import React, {useState, useEffect} from 'react';

import OpenAi from './OpenAi';

function CryptoInfo() {
  
    const [cryptoData, setCryptoData] = useState([]);
    const api_key = 'f237a2061812440599b5684a5ae72bc9';
    const crypto_name = 'bitcoin';
    
    useEffect(() => {
      
      fetch(`https://newsapi.org/v2/everything?q=${crypto_name}&apiKey=${api_key}`)
        .then(res => res.json())
        .then(data => setCryptoData(data.articles))
        console.log(cryptoData);
    
    }, [])
    
    return (
      <div>
        <h1>Crypto Info</h1>
        <p>Here is some info about crypto</p>
        {cryptoData.slice(0, 5).map((article, index) => (
            
          <div key={index}>


            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p>{article.url}</p>
          </div>
          
        ))}
      </div>
    );
  }
  
export default CryptoInfo;
