import React from "react";
import { Link } from "react-router-dom";




function Home() {
    return (
        <>
            <h1 class="welcomebanner">Welcome to CoinCoach</h1>
            <div class="maincontainer">
        <div class="financial">
       <button>
            <Link to="/tracker">Financial Tracker</Link>
            </button>
        </div>

          <img src='coin.jpeg' alt='coin logo' class="money" />
       
       <div class="crypto">
         <button>   
            <Link to="/crypto">Crypto Tracker</Link>
         </button>

       </div>


    </div>
            
        </>
    )
};

export default Home;

