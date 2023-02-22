import Stack from "@mui/system/Stack";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

//Function to show navigation Nav bar
function BasicButtons() {
  return (
    <Stack 
    spacing={2} 
    direction="row" 
    justifyContent="center" 
    ml="13px" 
     mb="10px">

      <Button 
      variant="outlined" 
      component={Link} 
      to="/" 
      size="large">
      Home
      </Button>

      <Button 
      variant="outlined" 
      component={Link} 
      to="/about" 
      size="large">
      About
      </Button>

      <Button 
      variant="outlined" 
      component={Link} 
      to="/contact" 
      size="large">
      Contact
      </Button>
    </Stack>
  );
}

export default BasicButtons; 