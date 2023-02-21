import React, { useState, useEffect } from "react";

function CryptoInfo({ cryptoData }) {
  return (
    <div>
      <h3>Short Crypto news</h3>
      {cryptoData.slice(0, 5).map((article, index) => (
        <div key={index}>
          <h4>{article.title}</h4>

          {article.urlToImage.endsWith(".mp4") ? (
            <video
              src={article.urlToImage}
              width="300"
              height="200"
              controls
            ></video>
          ) : (
            <img
              src={article.urlToImage}
              width="300"
              height="200"
              alt="{article.title}"
            />
          )}

          <p>{article.description}</p>
          <p>{new Date(article.publishedAt).toLocaleDateString("en-GB")}</p>
        </div>
      ))}
    </div>
  );
}

export default CryptoInfo;
