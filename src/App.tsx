import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// common components
import Header from './components/header';
import Footer from './components/footer';

// content components
import Home from './content/home';
import About from './content/about';
import Services from './content/services';
import Apps from './content/apps';
import Contact from './content/contact';

// styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// 3rd Party JavaScript Libraries
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        {/* Client-Side Routing */}
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home username='admin' displayName='Admin' />} />
            <Route path="/home" element={<Home username='admin' displayName='Admin' />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
