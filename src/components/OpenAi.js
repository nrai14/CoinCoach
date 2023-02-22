import { useState, useEffect } from "react";
import axios from "axios";

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

function OpenAi({ cryptoData }) {
  const [loading, setLoading] = useState(false);
  const [openAiData, setopenAiData] = useState([]);

  var answer = [];

  const question =
    " - return only number from 0 to 10 if that information is good for bitcoin future.";

  useEffect(() => {
    if (cryptoData.length === 5) {
      cryptoData.forEach((element) => {
        getRes(element.url + question);
      });
    }
  }, [cryptoData]);


  const getRes = (url) => {
    setLoading(true);
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: {
        prompt: url,

        temperature: 0,
        n: 1,
        model: "text-davinci-003",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization:
          'Bearer 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'

      },
    })
      .then((res) => {
        // appendData(res.data.choices[0].text); to answer array
        answer.push(res.data.choices[0].text);
        // remove \n\n from answer array
        answer = answer.map((item) => item.replace(/\n\n/g, ""));
        // remove all non numeric characters from answer array
        answer = answer.map((item) => item.replace(/[^0-9]/g, ""));
        // change value from string to number
        answer = answer.map((item) => Number(item));
        // remove all NaN values from answer array
        answer = answer.filter((item) => !isNaN(item));
        // remove all values from answer array that are not between 0 and 10
        answer = answer.filter((item) => item >= 0 && item <= 10);


        setopenAiData([...openAiData, answer]);

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
        {loading ? (
          <span>loading...</span>
        ) : (
          <p>

            <Card
              style={{
                maxWidth: "100%",
                margin: "10px",
                padding: "50px"
              }} >

              <Typography
                variant='h4'
                align='left'
              >
                OpenAi based on {cryptoData.length} article evaluate bitcoin future on :
                {" "}
              </Typography>

            </Card>

            {openAiData < 5 ? (
              <span style={{ color: "red" }}>{openAiData}</span>
            ) : openAiData > 5 ? (
              <span style={{ color: "green" }}>{openAiData}</span>
            ) : openAiData === 5 ? (
              <span style={{ color: "yellow" }}>{openAiData}</span>
            ) : (
              openAiData
            )}

          </p>
        )}
      </div>
    </>
  );
}

export default OpenAi;

