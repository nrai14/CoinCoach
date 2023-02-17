import { useState, useEffect } from "react";

import axios from "axios";

function OpenAi({cryptoData}) {
  const [loading, setLoading] = useState(false);
  // let [obj, setObj] = useState({ choices: [] });
  const [openAiData, setopenAiData] = useState([]);

  useEffect(() => {
      if (cryptoData.length === 5) {
    cryptoData.forEach(element => {
        getRes(element.url)
      
    });
  }

  }, [cryptoData])



console.log({cryptoData})
  const getRes = (url) => {
    setLoading(true);
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: {
        prompt: url,
    
        temperature: 0.5,
        n: 1,
        model: "text-davinci-003",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
    })
      .then((res) => {
        setopenAiData([...openAiData, res.data.choices[0].text])
        console.log(res);
        responseHandler(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message, e);
      });
  };

  const responseHandler = (res) => {
    if (res.status === 200) {
      
      setLoading(false);
    }
  };

  return (
    <>

      <div>
        {loading ? (
          <span>loading...</span>
        ) : (
          openAiData.map((text, i) => <div key={i}>{text}</div>)
        )}
      </div>

    </>
  );
}

export default OpenAi;
