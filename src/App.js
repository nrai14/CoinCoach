import {Routes, Route} from "react-router-dom";

import CryptoTracker from './pages/CryptoTracker';
import Tracker from './pages/Tracker';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
   
   <>
    <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/tracker" element={<Tracker/>} />
         <Route path="/crypto" element={<CryptoTracker/>} />
         <Route path="*" element={<NotFound />} />       
      </Routes>    
    <Footer/> 
   </>  
  );
}

export default App;
