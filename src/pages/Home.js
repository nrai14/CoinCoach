import React from "react";
import { Link, NavLink } from "react-router-dom";
import Coin from "../components/Coin";
import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';




function Home() {
    return (
        <>
            <Typography variant="h2" align="center" sx={{p:5}}>Welcome to CoinCoach</Typography>
            <div class="maincontainer">
        <div class="financial">
      

       {/* <Button variant="outlined" component={Link} to="/Tracker"  style={{maxWidth: '100px', maxHeight: '200px', minWidth: '250px', minHeight: '50px'}} >Coin Tracker</Button> */}

       <Link to="/tracker">
       <a class="css3dbutton">Coin Tracker</a></Link>

        </div>

                <Coin />
          {/* <img src='coin.jpeg' alt='coin logo' class="money" /> */}
       
       <div class="crypto">
       {/* <Button variant="outlined" component={Link} to="/OpenAi.js" style={{maxWidth: '100px', maxHeight: '200px', minWidth: '250px', minHeight: '50px'}}>Crypto News</Button>> */}
        <Link to="/crypto">
       <a class="css3dbutton" >Crypto News</a></Link>
       </div>


    </div>
            
        </>
    )
};

export default Home;

