import React from "react";
import axios from "axios";

function CryptoInfo() {

    const coin_name = "bitcoin";
    const language = "en";

    

  const apiUrl =
  `https://newsdata.io/api/1/news?apikey=pub_172643d5b5bab743abcf4cae2cd5cc853dcdd&q=${coin_name}&language=${language}`;

  const getCryptoInfo = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data.results[0].title);
      console.log(response.data.results[0].description);
        console.log(response.data.results[0].content);

    } catch (error) {
      console.log(error);
    }
  };

  getCryptoInfo();

  return (
    <div>
      <h1>Crypto Info</h1>
      <p>Here is some info about crypto</p>
       
        

    </div>
  );
}

export default CryptoInfo;