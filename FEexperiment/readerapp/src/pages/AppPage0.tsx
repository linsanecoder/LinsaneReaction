import logo from '../logo.svg';
import '../App.css';
import Collapse from '../components/Collapse';

function AppPage0({ title }: { title: string } ) {
  return (
    <div className="App0">
      <Collapse id="mainApp" label="Default React Content">
        <header className="App-header">
          <h1>{title}</h1>
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
