import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Pages/About';
import Service from './Pages/Service';
import ContactUs from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
