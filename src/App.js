import {useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import OpenAi from './OpenAi';


function App() {
  return (
    <div className="App">
      <Header className="App-header" />

      <Form className="App-form" />

      <OpenAi className="App-openai" />

    

      <Footer className="App-footer" />
 
    </div>
  );
}

export default App;
