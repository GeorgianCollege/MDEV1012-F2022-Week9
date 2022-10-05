import React from 'react';

// common components
import Header from './components/header';
import Footer from './components/footer';

// styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header></Header>

      {/* Main Content */}
      <div className="container">
      <h1>Hello, World!</h1>
      </div>


      <Footer></Footer>

    </div>
  );
}

export default App;
