import { useState } from "react";
import axios from "axios";

function OpenAi() {
  const [loading, setLoading] = useState(false);
  let [obj, setObj] = useState({ choices: [] });
  const [payload, setPayLoad] = useState({
    prompt: "",

    temperature: 0.5,
    n: 1,
    model: "text-davinci-003",
  });

  const getRes = () => {
    setLoading(true);
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: payload,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
    })
      .then((res) => {
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
      setObj(res.data);
      setLoading(false);
    }
  };

  return (
    <>
      <textarea
        type="text"
        placeholder="Enter Text"
        readOnly={loading}
        onChange={(e) => {
          setPayLoad({
            ...payload,
            prompt: e.target.value,
          });
        }}
        value={payload.prompt}
      />

      <div>
        {loading ? (
          <span>loading...</span>
        ) : (
          obj?.choices?.map((v, i) => <div key="{i}">{v.text}</div>)
        )}
      </div>

      <button disabled={loading} onClick={getRes}>
        {loading ? "Loading... " : "Get resposne"}
      </button>
    </>
  );
}

export default OpenAi;
