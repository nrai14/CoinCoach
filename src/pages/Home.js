import React from "react";
import { Link } from "react-router-dom";
import Coin from "../components/Coin";

import { Typography } from "@mui/material";


function Home() {
  return (
    <>
      <Typography 
      variant="h2" 
      align="center" 
      sx={{ p: 5 }}>
      Welcome to CoinCoach
      </Typography>

      <div className="maincontainer">
        <div className="financial">
          <Link to="/tracker">
            <a className="css3dbutton">Coins Tracker</a>
          </Link>
        </div>
        <div className="coinbox">
            <Coin />


          <p className="marquee">
            <span>
              CoinCoach is your ultimate financial companion to keep tabs on
              your spending and the latest crypto news
            </span>
          </p>
        </div>

        <div className="crypto">
          <Link to="/crypto">
            <a className="css3dbutton">Crypto News</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
