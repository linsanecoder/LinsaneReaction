import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './pages/Layout';
import Collapse from './components/Collapse';

function App() {
  return (
    <div className="App">
      <Layout />
      <Collapse id="obj1" label="Object 1 React Content">
        <p>Object 1 section</p>
      </Collapse>
      <Collapse id="obj2" label="Object 2 React Content">
        <p>Object 2 section</p>
      </Collapse>
      <Collapse id="mainApp" label="Default React Content">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>
        </Collapse>
    </div>
  );
}

export default App;
