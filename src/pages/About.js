import Team from "../components/Team";

import Typography from '@mui/material/Typography';


function About() {
  return (
    <> 
      <Typography 
      variant='h3' 
      align='center' 
      sx={{ p: 5 }}>
      About
      </Typography>
    
      <div class="container">
        <p>
          Welcome to CoinCoach, a React app created by Nish, Sabrina, Michal and
          Laura as part of their EDX coding bootcamp's final project. 
        </p>
       
        
        <Team />

        <p>
            CoinCoach
          is a versatile tool that offers users <strong>two crucial functionalities.</strong>
          </p>
       
        <p>
          Firstly, CoinCoach serves as a Financial Tracker, making it simple for
          users to <strong>monitor their spending and expenditures against their income.</strong>
          With a user-friendly interface, CoinCoach enables you to track and
          categorize your expenses, helping you get a better understanding of
          your financial situation. Our Financial Tracker is designed to be 
          <strong> simple, easy to use and gives you a clear picture of your financial
          health.</strong>
        </p>
        <p>
          Secondly, CoinCoach is also a Crypto Currency Tracker, giving you
          insights on the coins that are worth investing in. 
          CoinCoach provides you with <strong>real-time information about
          cryptocurrencies, helping you make informed decisions about your
          investments.</strong> 
        </p>
        <p>
          Nish designed the front page, which sets the tone for the whole user
          experience. Sabrina worked tirelessly to create the Financial Tracker
          functionality, making sure it meets user expectations. Laura's visual
          displays showcase the data from the tracker and make it easy for users
          to understand and interpret the information. Whilst Michal ensured
          that the Crypto currency side intertwined well with the Open AI to
          assist users in understanding the Crypto currency side better.
        </p>
        <p>
          To create this app, we utilized a range of tools such as React, which
          helped us build an intuitive user interface, and Material UI, which
          provided us with pre-built components to save time and streamline our
          design process. We also followed Agile methodology to ensure we could
          keep track of our progress and respond to feedback quickly.
        </p>
        <p>
          Overall, CoinCoach is a <strong>must-have app for anyone who wants to improve
          their financial literacy and make informed decisions about their
          investments.</strong> We hope you enjoy using it as much as we enjoyed creating
          it.
        </p>
      </div>
    </>
  );
}

export default About;
