import logo from '../logo.svg';
import '../App.css';
import Layout from './Layout';
import Collapse from '../components/Collapse';

function AppPage0() {
  return (
    <div className="App0">
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

export default AppPage0;
