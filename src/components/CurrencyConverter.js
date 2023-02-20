

import Typography from '@mui/material/Typography';
import CurrencyRow from './CurrencyRow';



  
function CurrencyConverter() {
  

  
  return (
  
   <>
     <Typography variant='h6' align='center'>Currency Converter</Typography>
     <CurrencyRow/>
    <div> = </div>
     <CurrencyRow/>
   </>
    
 
  );
}
  
export default CurrencyConverter;