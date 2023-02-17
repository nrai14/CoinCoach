import React, {useState, useEffect} from 'react';

function CryptoInfo({cryptoData}) {
  
    
    
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
