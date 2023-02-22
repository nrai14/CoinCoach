import React, { useState, useEffect } from "react";

function CryptoInfo({ cryptoData }) {
  return (
    <>
      <h3>Short Crypto news</h3>
      {console.log('inside component')}
      {console.log(cryptoData)}
   
      {cryptoData.slice(0, 5).map((article, index) => (
        
        <div key={index}>
          <h4>{article.title}</h4>
          

       
            <img
              src={article.urlToImage}
              width="300"
              height="200"
              alt="{article.title}"
            />
        

          <p>{article.description}</p>
          <p>{new Date(article.publishedAt).toLocaleDateString("en-GB")}</p>
        </div>
      ))}
    </>
  );
}

export default CryptoInfo;