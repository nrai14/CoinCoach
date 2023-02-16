
import React from "react";

import axios from "axios";

function CryptoInfo() {


    

  const apiUrl =
  `https://cryptopanic.com/api/v1/posts/?auth_token=778bd1202a41253ff2bfa288b1b3483350e91b55`;

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