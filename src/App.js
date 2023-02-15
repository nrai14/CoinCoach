
import {Routes, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Predictor from "./pages/Predictor";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
   
   <>
    <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predictor" element={<Predictor />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    
    <Footer/>
   </>
   
  );
}

export default App;
