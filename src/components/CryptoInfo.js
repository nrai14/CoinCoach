import React, {useState, useEffect} from 'react';

function CryptoInfo({cryptoData}) {


    return (
      <div>
        <h3>Short Crypto news</h3>
        {cryptoData.slice(0, 5).map((article, index) => (
          <div key={index}>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <p>{article.url}</p>
          </div>
        ))}
      </div>
    );
  }
  
export default CryptoInfo;
