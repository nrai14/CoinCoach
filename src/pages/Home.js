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

      <div class="maincontainer">
        <div class="financial">
          <Link to="/tracker">
            <a class="css3dbutton">Coins Tracker</a>
          </Link>
        </div>
        <div class="coinbox">
            <Coin />


          <p class="marquee">
            <span>
              CoinCoach is your ultimate financial companion to keep tabs on
              your spending and the latest crypto news
            </span>
          </p>
        </div>

        <div class="crypto">
          <Link to="/crypto">
            <a class="css3dbutton">Crypto News</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
