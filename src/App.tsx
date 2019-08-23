import React from 'react';
import logo from './logo.svg';
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <body className="App-body">
        <React.Fragment>
          <Button>Yes</Button>
        </React.Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
      <Footer></Footer>
      
    </div>
    
  );
}

export default App;
