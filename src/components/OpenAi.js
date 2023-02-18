import { useState, useEffect } from "react";
import axios from "axios";

function OpenAi({cryptoData}) {
  const [loading, setLoading] = useState(false);
  const [openAiData, setopenAiData] = useState([]);

  var answer = [];

  const question = " - based on provided url tell me what is cryptocurrency name and from scale from 0 to 100 is it worth to buy in format: \"cryptoname\" \"scale\"";

  useEffect(() => {
      if (cryptoData.length === 5) {
    cryptoData.forEach(element => {
        getRes(element.url + question)
      
    });
  }

  }, [cryptoData])


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
        
        
        // appendData(res.data.choices[0].text); to answer array
        answer.push(res.data.choices[0].text);
        console.log(answer);
        responseHandler(res);
      })
      .catch((e) => {
        setLoading(false);
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
        <p>OpenAi return this:</p>
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
