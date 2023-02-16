import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import OpenAi from './OpenAi';

import CryptoInfo from './CryptoInfo';


function App() {
  return (
    <div className="App">
      <Header className="App-header" />

      <Form className="App-form" />

      <OpenAi className="App-openai" />


      <CryptoInfo className="App-crypto" />
    

      <Footer className="App-footer" />
 
    </div>
  );
}

export default App;
