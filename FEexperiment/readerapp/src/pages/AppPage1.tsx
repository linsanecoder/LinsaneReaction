import '../App.css';
import Collapse from '../components/Collapse';

function AppPage1() {
  return (
    <div className="App">
      <Collapse id="pg1obj1" label="Page 1 Object 1 React Content">
        <p>Object 1 section</p>
      </Collapse>
      <Collapse id="pg1obj2" label="Page 1 Object 2 React Content">
        <p>Object 2 section</p>
      </Collapse>
    </div>
  );
}

export default AppPage1;
