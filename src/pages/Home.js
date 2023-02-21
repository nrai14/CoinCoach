import React from "react";
import { Link } from "react-router-dom";
import Coin from "../components/Coin";
import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";


function Home() {
    return (
        <>
            <h1 class="welcomebanner">Welcome to CoinCoach</h1>
            <div class="maincontainer">
        <div class="financial">
      

       <Button variant="outlined" component={Link} to="/Tracker">Coin Tracker</Button>
            
        </div>

                <Coin />
          {/* <img src='coin.jpeg' alt='coin logo' class="money" /> */}
       
       <div class="crypto">
       <Button variant="outlined" component={Link} to="/OpenAi.js">Crypto News</Button>

       </div>


    </div>
            
        </>
    )
};

export default Home;

