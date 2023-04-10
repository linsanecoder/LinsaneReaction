import '../App.css';
import Layout from './Layout';
import Collapse from '../components/Collapse';

function AppPage2() {
  return (
    <div className="App2">
      <Collapse id="pg2obj1" label="Page 2 Object 1 React Content">
        <p>Object 1 section</p>
      </Collapse>
      <Collapse id="pg2obj2" label="Page 2 Object 2 React Content">
        <p>Object 2 section</p>
      </Collapse>
    </div>
  );
}

export default AppPage2;
