import React from "react";
import Typography from '@mui/material/Typography';

function CryptoInfo({ cryptoData }) {
  return (

    <div>
      <Typography variant='h4' align='center' pt="50px">Short Crypto News </Typography>
      {cryptoData.slice(0, 5).map((article, index) => (
        <div key={index}>

          <h4>{article.title}</h4>
          <h5>{article.author}</h5>
          {article.urlToImage && <img src={article.urlToImage} alt='news image' />}
          <p>{article.description}</p>
          <h5>{new Date(article.publishedAt).toLocaleDateString("en-GB")}</h5>
          <a href={article.url} target="_blank">Select here to read news</a>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default CryptoInfo;
